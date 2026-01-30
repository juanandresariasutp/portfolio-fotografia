import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import './EventosDetalle.css';

// Importa tus fotos (Asegúrate de tener las rutas correctas)
import foto1 from '../../assets/eventos/bodas/boda1.jpg';
import foto2 from '../../assets/eventos/bodas/boda2.jpg';

const fotosBodas = [
  { id: 1, src: foto1, alt: 'Momento de la ceremonia' },
  { id: 2, src: foto2, alt: 'Sesión de novios' },
  // ... agrega más aquí
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
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.div 
      className="detalle-evento-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navegación y Header igual a la página de Eventos */}
      <div className="category-nav">
        <button onClick={() => window.history.back()} className="back-btn">
          <ArrowLeft size={20} /> <span>Volver</span>
        </button>
      </div>

      <motion.header className="category-header" variants={itemVariants}>
        <h1>Bodas</h1>
        <div className="header-line"></div>
        <p>Capturando la esencia del amor en cada detalle.</p>
      </motion.header>

      {/* Galería con diseño mejorado */}
      <motion.div className="masonry-grid" variants={containerVariants}>
        {fotosBodas.map((foto) => (
          <motion.div 
            key={foto.id} 
            className="masonry-item"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedImg(foto)}
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

      {/* Lightbox con mejor estilo */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button className="close-lightbox" onClick={() => setSelectedImg(null)}>
              <X size={30} />
            </button>
            
            {/* El content debe envolver a la imagen y al texto */}
            <div className="lightbox-content">
              <motion.img 
                src={selectedImg.src} 
                alt={selectedImg.alt}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} // Para que no se cierre al tocar la foto
              />
              <p className="lightbox-caption">{selectedImg.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Bodas;