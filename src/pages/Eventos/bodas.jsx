import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'; 
import './EventosDetalle.css';

// Importa tus fotos
import foto1 from '../../assets/eventos/bodas/boda (1).jpg';
import foto2 from '../../assets/eventos/bodas/boda (2).jpg';
import foto3 from '../../assets/eventos/bodas/boda (3).jpg';
import foto4 from '../../assets/eventos/bodas/boda (4).jpg';
import foto5 from '../../assets/eventos/bodas/boda (5).jpg';
import foto6 from '../../assets/eventos/bodas/boda (6).jpg';
import foto7 from '../../assets/eventos/bodas/boda (7).jpg';
import foto8 from '../../assets/eventos/bodas/boda (8).jpg';
import foto9 from '../../assets/eventos/bodas/boda (9).jpg';
import foto10 from '../../assets/eventos/bodas/boda (10).jpg';
import foto11 from '../../assets/eventos/bodas/boda (11).jpg';
import foto12 from '../../assets/eventos/bodas/boda (12).jpg';
import foto13 from '../../assets/eventos/bodas/boda (13).jpg';
import foto14 from '../../assets/eventos/bodas/boda (14).jpg';
import foto15 from '../../assets/eventos/bodas/boda (15).jpg';
import foto16 from '../../assets/eventos/bodas/boda (16).jpg';
import foto17 from '../../assets/eventos/bodas/boda (17).jpg';
import foto18 from '../../assets/eventos/bodas/boda (18).jpg';
import foto19 from '../../assets/eventos/bodas/boda (19).jpg';
import foto20 from '../../assets/eventos/bodas/boda (20).jpg';
import foto21 from '../../assets/eventos/bodas/boda (21).jpg';
import foto22 from '../../assets/eventos/bodas/boda (22).jpg';
import foto23 from '../../assets/eventos/bodas/boda (23).jpg';
import foto24 from '../../assets/eventos/bodas/boda (24).jpg';
import foto25 from '../../assets/eventos/bodas/boda (25).jpg';
import foto26 from '../../assets/eventos/bodas/boda (26).jpg';
import foto27 from '../../assets/eventos/bodas/boda (27).jpg';
import foto28 from '../../assets/eventos/bodas/boda (28).jpg';
import foto29 from '../../assets/eventos/bodas/boda (29).jpg';
import foto30 from '../../assets/eventos/bodas/boda (30).jpg';
import foto31 from '../../assets/eventos/bodas/boda (31).jpg';
import foto32 from '../../assets/eventos/bodas/boda (32).jpg';
import foto33 from '../../assets/eventos/bodas/boda (33).jpg';
import foto34 from '../../assets/eventos/bodas/boda (34).jpg';
import foto35 from '../../assets/eventos/bodas/boda (35).jpg';
import foto36 from '../../assets/eventos/bodas/boda (36).jpg';
import foto37 from '../../assets/eventos/bodas/boda (37).jpg';
import foto38 from '../../assets/eventos/bodas/boda (38).jpg';
import foto39 from '../../assets/eventos/bodas/boda (39).jpg';
import foto40 from '../../assets/eventos/bodas/boda (40).jpg';
import foto41 from '../../assets/eventos/bodas/boda (41).jpg';
import foto42 from '../../assets/eventos/bodas/boda (42).jpg';
import foto43 from '../../assets/eventos/bodas/boda (43).jpg';
import foto44 from '../../assets/eventos/bodas/boda (44).jpg';
import foto45 from '../../assets/eventos/bodas/boda (45).jpg';


const fotosBodas = [
  { id: 1, src: foto1, alt: 'Fotografía de Boda' },
  { id: 2, src: foto2, alt: 'Fotografía de Boda' },
  { id: 3, src: foto3, alt: 'Fotografía de Boda' },
  { id: 4, src: foto4, alt: 'Fotografía de Boda' },
  { id: 5, src: foto5, alt: 'Fotografía de Boda' },
  { id: 6, src: foto6, alt: 'Fotografía de Boda' },
  { id: 7, src: foto7, alt: 'Fotografía de Boda' },
  { id: 8, src: foto8, alt: 'Fotografía de Boda' },
  { id: 9, src: foto9, alt: 'Fotografía de Boda' },
  { id: 10, src: foto10, alt: 'Fotografía de Boda' },
  { id: 11, src: foto11, alt: 'Fotografía de Boda' },
  { id: 12, src: foto12, alt: 'Fotografía de Boda' },
  { id: 13, src: foto13, alt: 'Fotografía de Boda' },
  { id: 14, src: foto14, alt: 'Fotografía de Boda' },
  { id: 15, src: foto15, alt: 'Fotografía de Boda' },
  { id: 16, src: foto16, alt: 'Fotografía de Boda' },
  { id: 17, src: foto17, alt: 'Fotografía de Boda' },
  { id: 18, src: foto18, alt: 'Fotografía de Boda' },
  { id: 19, src: foto19, alt: 'Fotografía de Boda' },
  { id: 20, src: foto20, alt: 'Fotografía de Boda' },
  { id: 21, src: foto21, alt: 'Fotografía de Boda' },
  { id: 22, src: foto22, alt: 'Fotografía de Boda' },
  { id: 23, src: foto23, alt: 'Fotografía de Boda' },
  { id: 24, src: foto24, alt: 'Fotografía de Boda' },
  { id: 25, src: foto25, alt: 'Fotografía de Boda' },
  { id: 26, src: foto26, alt: 'Fotografía de Boda' },
  { id: 27, src: foto27, alt: 'Fotografía de Boda' },
  { id: 28, src: foto28, alt: 'Fotografía de Boda' },
  { id: 29, src: foto29, alt: 'Fotografía de Boda' },
  { id: 30, src: foto30, alt: 'Fotografía de Boda' },
  { id: 31, src: foto31, alt: 'Fotografía de Boda' },
  { id: 32, src: foto32, alt: 'Fotografía de Boda' },
  { id: 33, src: foto33, alt: 'Fotografía de Boda' },
  { id: 34, src: foto34, alt: 'Fotografía de Boda' },
  { id: 35, src: foto35, alt: 'Fotografía de Boda' },
  { id: 36, src: foto36, alt: 'Fotografía de Boda' },
  { id: 37, src: foto37, alt: 'Fotografía de Boda' },
  { id: 38, src: foto38, alt: 'Fotografía de Boda' },
  { id: 39, src: foto39, alt: 'Fotografía de Boda' },
  { id: 40, src: foto40, alt: 'Fotografía de Boda' },
  { id: 41, src: foto41, alt: 'Fotografía de Boda' },
  { id: 42, src: foto42, alt: 'Fotografía de Boda' },
  { id: 43, src: foto43, alt: 'Fotografía de Boda' },
  { id: 44, src: foto44, alt: 'Fotografía de Boda' },
  { id: 45, src: foto45, alt: 'Fotografía de Boda' },

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

function Bodas() {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Dividimos las fotos en 3 columnas y guardamos su índice original para el carrusel
  const columnas = useMemo(() => {
    const cols = [[], [], []];
    fotosBodas.forEach((foto, index) => {
      cols[index % 3].push({ ...foto, originalIndex: index });
    });
    return cols;
  }, []);

  const nextPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1 === fotosBodas.length ? 0 : prev + 1));
  }, []);

  const prevPhoto = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? fotosBodas.length - 1 : prev - 1));
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
        <h1>Bodas</h1>
        <div className="header-line"></div>
        <p>Historias de amor que conservan la emoción, la belleza y la esencia de uno de los días más importantes de sus vidas.</p>
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
                src={fotosBodas[currentIndex].src} 
                alt={fotosBodas[currentIndex].alt}
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
                {currentIndex + 1} / {fotosBodas.length} - {fotosBodas[currentIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Bodas;