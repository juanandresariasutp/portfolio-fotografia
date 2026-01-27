import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './EventosDetalle.css';

import foto1 from '../../assets/eventos/bodas/boda1.jpg';
import foto2 from '../../assets/eventos/bodas/boda2.jpg';
// ... importa las demás

const fotosBodas = [
  { id: 1, src: foto1, alt: 'Momento de la ceremonia' },
  { id: 2, src: foto2, alt: 'Sesión de novios' },
];

function Bodas() {
  const [selectedImg, setSelectedImg] = useState(null);

  const abrirImagen = (foto) => setSelectedImg(foto);
  const cerrarImagen = () => setSelectedImg(null);

  return (
    <div className="detalle-evento-page">
      <header className="detalle-header">
        <button onClick={() => window.history.back()} className="back-btn">← Volver</button>
        <h1>Bodas</h1>
        <p>Capturando la esencia del amor en cada detalle.</p>
      </header>

      <div className="masonry-grid">
        {fotosBodas.map((foto) => (
          <motion.div 
            key={foto.id} 
            className="masonry-item"
            layoutId={foto.id} // Efecto de expansión suave
            onClick={() => abrirImagen(foto)}
          >
            <img src={foto.src} alt={foto.alt} loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* MODAL DEL LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrarImagen}
          >
            <button className="close-lightbox" onClick={cerrarImagen}>
              <X size={40} />
            </button>
            
            <motion.img 
              src={selectedImg.src} 
              alt={selectedImg.alt}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()} // Evita cerrar al tocar la foto
            />
            
            <p className="lightbox-caption">{selectedImg.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Bodas;