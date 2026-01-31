import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'; 
import './EventosDetalle.css';

// Importa tus fotos
import foto1 from '../../assets/eventos/Cumpleanos/Cumple (1).jpg';
import foto2 from '../../assets/eventos/Cumpleanos/Cumple (2).jpg';
import foto3 from '../../assets/eventos/Cumpleanos/Cumple (3).jpg';
import foto4 from '../../assets/eventos/Cumpleanos/Cumple (4).jpg';
import foto5 from '../../assets/eventos/Cumpleanos/Cumple (5).jpg';
import foto6 from '../../assets/eventos/Cumpleanos/Cumple (6).jpg';
import foto7 from '../../assets/eventos/Cumpleanos/Cumple (7).jpg';
import foto8 from '../../assets/eventos/Cumpleanos/Cumple (8).jpg';
import foto9 from '../../assets/eventos/Cumpleanos/Cumple (9).jpg';
import foto10 from '../../assets/eventos/Cumpleanos/Cumple (10).jpg';
import foto11 from '../../assets/eventos/Cumpleanos/Cumple (11).jpg';
import foto12 from '../../assets/eventos/Cumpleanos/Cumple (12).jpg';
import foto13 from '../../assets/eventos/Cumpleanos/Cumple (13).jpg';
import foto14 from '../../assets/eventos/Cumpleanos/Cumple (14).jpg';
import foto15 from '../../assets/eventos/Cumpleanos/Cumple (15).jpg';
import foto16 from '../../assets/eventos/Cumpleanos/Cumple (16).jpg';
import foto17 from '../../assets/eventos/Cumpleanos/Cumple (17).jpg';
import foto18 from '../../assets/eventos/Cumpleanos/Cumple (18).jpg';
import foto19 from '../../assets/eventos/Cumpleanos/Cumple (19).jpg';
import foto20 from '../../assets/eventos/Cumpleanos/Cumple (20).jpg';
import foto21 from '../../assets/eventos/Cumpleanos/Cumple (21).jpg';
import foto22 from '../../assets/eventos/Cumpleanos/Cumple (22).jpg';
import foto23 from '../../assets/eventos/Cumpleanos/Cumple (23).jpg';
import foto24 from '../../assets/eventos/Cumpleanos/Cumple (24).jpg';
import foto25 from '../../assets/eventos/Cumpleanos/Cumple (25).jpg';


const fotosCumple = [
  { id: 1, src: foto1, alt: 'Fotografía de cumpleaños' },
  { id: 2, src: foto2, alt: 'Fotografía de cumpleaños' },
  { id: 3, src: foto3, alt: 'Fotografía de cumpleaños' },
  { id: 4, src: foto4, alt: 'Fotografía de cumpleaños' },
  { id: 5, src: foto5, alt: 'Fotografía de cumpleaños' },
  { id: 6, src: foto6, alt: 'Fotografía de cumpleaños' },
  { id: 7, src: foto7, alt: 'Fotografía de cumpleaños' },
  { id: 8, src: foto8, alt: 'Fotografía de cumpleaños' },
  { id: 9, src: foto9, alt: 'Fotografía de cumpleaños' },
  { id: 10, src: foto10, alt: 'Fotografía de cumpleaños' },
  { id: 11, src: foto11, alt: 'Fotografía de cumpleaños' },
  { id: 12, src: foto12, alt: 'Fotografía de cumpleaños' },
  { id: 13, src: foto13, alt: 'Fotografía de cumpleaños' },
  { id: 14, src: foto14, alt: 'Fotografía de cumpleaños' },
  { id: 15, src: foto15, alt: 'Fotografía de cumpleaños' },
  { id: 16, src: foto16, alt: 'Fotografía de cumpleaños' },
  { id: 17, src: foto17, alt: 'Fotografía de cumpleaños' },
  { id: 18, src: foto18, alt: 'Fotografía de cumpleaños' },
  { id: 19, src: foto19, alt: 'Fotografía de cumpleaños' },
  { id: 20, src: foto20, alt: 'Fotografía de cumpleaños' },
  { id: 21, src: foto21, alt: 'Fotografía de cumpleaños' },
  { id: 22, src: foto22, alt: 'Fotografía de cumpleaños' },
  { id: 23, src: foto23, alt: 'Fotografía de cumpleaños' },
  { id: 24, src: foto24, alt: 'Fotografía de cumpleaños' },
  { id: 25, src: foto25, alt: 'Fotografía de cumpleaños' },
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

function Cumples() {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Dividimos las fotos en 3 columnas y guardamos su índice original para el carrusel
  const columnas = useMemo(() => {
    const cols = [[], [], []];
    fotosCumple.forEach((foto, index) => {
      cols[index % 3].push({ ...foto, originalIndex: index });
    });
    return cols;
  }, []);

  const nextPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1 === fotosCumple.length ? 0 : prev + 1));
  }, []);

  const prevPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? fotosCumple.length - 1 : prev - 1));
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
        <h1>Cumpleaños</h1>
        <div className="header-line"></div>
        <p>Momentos llenos de color, energía y emoción que transforman cada cumpleaños en una experiencia inolvidable.</p>
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
                src={fotosCumple[currentIndex].src} 
                alt={fotosCumple[currentIndex].alt}
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
                {currentIndex + 1} / {fotosCumple.length} - {fotosCumple[currentIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Cumples;