import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'; 
import './EventosDetalle.css';

// Importa tus fotos
import foto1 from '../../assets/eventos/Quinces/Quinces (1).jpg';
import foto2 from '../../assets/eventos/Quinces/Quinces (2).jpg';
import foto3 from '../../assets/eventos/Quinces/Quinces (3).jpg';
import foto4 from '../../assets/eventos/Quinces/Quinces (4).jpg';
import foto5 from '../../assets/eventos/Quinces/Quinces (5).jpg';
import foto6 from '../../assets/eventos/Quinces/Quinces (6).jpg';
import foto7 from '../../assets/eventos/Quinces/Quinces (7).jpg';
import foto8 from '../../assets/eventos/Quinces/Quinces (8).jpg';
import foto9 from '../../assets/eventos/Quinces/Quinces (9).jpg';
import foto10 from '../../assets/eventos/Quinces/Quinces (10).jpg';
import foto11 from '../../assets/eventos/Quinces/Quinces (11).jpg';
import foto12 from '../../assets/eventos/Quinces/Quinces (12).jpg';
import foto13 from '../../assets/eventos/Quinces/Quinces (13).jpg';
import foto14 from '../../assets/eventos/Quinces/Quinces (14).jpg';
import foto15 from '../../assets/eventos/Quinces/Quinces (15).jpg';
import foto16 from '../../assets/eventos/Quinces/Quinces (16).jpg';
import foto17 from '../../assets/eventos/Quinces/Quinces (17).jpg';
import foto18 from '../../assets/eventos/Quinces/Quinces (18).jpg';
import foto19 from '../../assets/eventos/Quinces/Quinces (19).jpg';
import foto20 from '../../assets/eventos/Quinces/Quinces (20).jpg';
import foto21 from '../../assets/eventos/Quinces/Quinces (21).jpg';
import foto22 from '../../assets/eventos/Quinces/Quinces (22).jpg';
import foto23 from '../../assets/eventos/Quinces/Quinces (23).jpg';
import foto24 from '../../assets/eventos/Quinces/Quinces (24).jpg';
import foto25 from '../../assets/eventos/Quinces/Quinces (25).jpg';


const fotosQuinces = [
    { id: 1, src: foto1, alt: 'Fotografía de 15 años' },
    { id: 2, src: foto2, alt: 'Fotografía de 15 años' },
    { id: 3, src: foto3, alt: 'Fotografía de 15 años' },
    { id: 4, src: foto4, alt: 'Fotografía de 15 años' },
    { id: 5, src: foto5, alt: 'Fotografía de 15 años' },
    { id: 6, src: foto6, alt: 'Fotografía de 15 años' },
    { id: 7, src: foto7, alt: 'Fotografía de 15 años' },
    { id: 8, src: foto8, alt: 'Fotografía de 15 años' },
    { id: 9, src: foto9, alt: 'Fotografía de 15 años' },
    { id: 10, src: foto10, alt: 'Fotografía de 15 años' },
    { id: 11, src: foto11, alt: 'Fotografía de 15 años' },
    { id: 12, src: foto12, alt: 'Fotografía de 15 años' },
    { id: 13, src: foto13, alt: 'Fotografía de 15 años' },
    { id: 14, src: foto14, alt: 'Fotografía de 15 años' },
    { id: 15, src: foto15, alt: 'Fotografía de 15 años' },
    { id: 16, src: foto16, alt: 'Fotografía de 15 años' },
    { id: 17, src: foto17, alt: 'Fotografía de 15 años' },
    { id: 18, src: foto18, alt: 'Fotografía de 15 años' },
    { id: 19, src: foto19, alt: 'Fotografía de 15 años' },
    { id: 20, src: foto20, alt: 'Fotografía de 15 años' },
    { id: 21, src: foto21, alt: 'Fotografía de 15 años' },
    { id: 22, src: foto22, alt: 'Fotografía de 15 años' },
    { id: 23, src: foto23, alt: 'Fotografía de 15 años' },
    { id: 24, src: foto24, alt: 'Fotografía de 15 años' },
    { id: 25, src: foto25, alt: 'Fotografía de 15 años' },
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

function Quinces() {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Dividimos las fotos en 3 columnas y guardamos su índice original para el carrusel
  const columnas = useMemo(() => {
    const cols = [[], [], []];
    fotosQuinces.forEach((foto, index) => {
      cols[index % 3].push({ ...foto, originalIndex: index });
    });
    return cols;
  }, []);

  const nextPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1 === fotosQuinces.length ? 0 : prev + 1));
  }, []);

  const prevPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? fotosQuinces.length - 1 : prev - 1));
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
        <h1>15 Años</h1>
        <div className="header-line"></div>
        <p>Recuerdos que cuentan el paso de niña a mujer, capturando sonrisas, emociones auténticas y sueños que comienzan a florecer.</p>
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
                src={fotosQuinces[currentIndex].src} 
                alt={fotosQuinces[currentIndex].alt}
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
                {currentIndex + 1} / {fotosQuinces.length} - {fotosQuinces[currentIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Quinces;