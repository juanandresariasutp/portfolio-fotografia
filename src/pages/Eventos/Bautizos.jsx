import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'; 
import './EventosDetalle.css';

// Importa tus fotos
import foto1 from '../../assets/eventos/Bautizos/Bauti (1).jpg';
import foto2 from '../../assets/eventos/Bautizos/Bauti (2).jpg';
import foto3 from '../../assets/eventos/Bautizos/Bauti (3).jpg';
import foto4 from '../../assets/eventos/Bautizos/Bauti (4).jpg';
import foto5 from '../../assets/eventos/Bautizos/Bauti (5).jpg';
import foto6 from '../../assets/eventos/Bautizos/Bauti (6).jpg';
import foto7 from '../../assets/eventos/Bautizos/Bauti (7).jpg';
import foto8 from '../../assets/eventos/Bautizos/Bauti (8).jpg';
import foto9 from '../../assets/eventos/Bautizos/Bauti (9).jpg';
import foto10 from '../../assets/eventos/Bautizos/Bauti (10).jpg';
/*import foto11 from '../../assets/eventos/Bautizos/Bauti (11).jpg';
import foto12 from '../../assets/eventos/Bautizos/Bauti (12).jpg';
import foto13 from '../../assets/eventos/Bautizos/Bauti (13).jpg';
import foto14 from '../../assets/eventos/Bautizos/Bauti (14).jpg';
import foto15 from '../../assets/eventos/Bautizos/Bauti (15).jpg';
import foto16 from '../../assets/eventos/Bautizos/Bauti (16).jpg';
import foto17 from '../../assets/eventos/Bautizos/Bauti (17).jpg';
import foto18 from '../../assets/eventos/Bautizos/Bauti (18).jpg';
import foto19 from '../../assets/eventos/Bautizos/Bauti (19).jpg';
import foto20 from '../../assets/eventos/Bautizos/Bauti (20).jpg';
import foto21 from '../../assets/eventos/Bautizos/Bauti (21).jpg';
import foto22 from '../../assets/eventos/Bautizos/Bauti (22).jpg';
import foto23 from '../../assets/eventos/Bautizos/Bauti (23).jpg';
import foto24 from '../../assets/eventos/Bautizos/Bauti (24).jpg';
import foto25 from '../../assets/eventos/Bautizos/Bauti (25).jpg';*/



const fotosBautizo = [
  { id: 1, src: foto1, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 2, src: foto2, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 3, src: foto3, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 4, src: foto4, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 5, src: foto5, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 6, src: foto6, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 7, src: foto7, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 8, src: foto8, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 9, src: foto9, alt: 'Fotografía de bautizos & primeras comuniones' },
  { id: 10, src: foto10, alt: 'Fotografía de bautizos & primeras comuniones' },

];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

function Bautizos() {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Dividimos las fotos en 3 columnas y guardamos su índice original para el carrusel
  const columnas = useMemo(() => {
    const cols = [[], [], []];
    fotosBautizo.forEach((foto, index) => {
      cols[index % 3].push({ ...foto, originalIndex: index });
    });
    return cols;
  }, []);

  const nextPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1 === fotosBautizo.length ? 0 : prev + 1));
  }, []);

  const prevPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? fotosBautizo.length - 1 : prev - 1));
  }, []);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') setCurrentIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, nextPhoto, prevPhoto]);

  return (
    <motion.div 
      className="detalle-evento-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="category-nav">
        <button onClick={() => window.history.back()} className="back-btn">
          <ArrowLeft size={20} /> <span>Volver</span>
        </button>
      </div>

      <motion.header className="category-header" variants={itemVariants}>
        <h1>Bautizos & Primeras Comuniones</h1>
        <div className="header-line"></div>
        <p>Recuerdos que celebran la fe y la familia bajo la guía de Dios, capturando instantes sagrados que perduran para siempre.</p>
      </motion.header>

      <div className="custom-masonry-grid">
        {columnas.map((col, colIndex) => (
          <motion.div 
            key={colIndex} 
            className="masonry-column"
            variants={containerVariants}
          >
            {col.map((foto) => (
              <motion.div 
                key={foto.id} 
                className="masonry-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setCurrentIndex(foto.originalIndex)}
              >
                <div className="photo-wrapper">
                  <img src={foto.src} alt={foto.alt} loading="lazy" />
                  <div className="photo-overlay">
                    <span>Ampliar</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
          >
            {/* Botones de navegación (PC) */}
            <button className="nav-arrow prev" onClick={prevPhoto}>
              <ChevronLeft size={40} />
            </button>
            <button className="nav-arrow next" onClick={nextPhoto}>
              <ChevronRight size={40} />
            </button>

            <button className="close-lightbox" onClick={() => setCurrentIndex(null)}>
              <X size={30} />
            </button>
            
            <div className="lightbox-content">
              <motion.img 
                key={currentIndex}
                src={fotosBautizo[currentIndex].src} 
                alt={fotosBautizo[currentIndex].alt}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -50) nextPhoto();
                  else if (offset.x > 50) prevPhoto();
                }}
                onClick={(e) => e.stopPropagation()} 
              />
              <p className="lightbox-caption">
                {currentIndex + 1} / {fotosBautizo.length} - {fotosBautizo[currentIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Bautizos;