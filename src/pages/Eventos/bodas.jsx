import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
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
import foto46 from '../../assets/eventos/bodas/boda (46).jpg';
import foto47 from '../../assets/eventos/bodas/boda (47).jpg';
import foto48 from '../../assets/eventos/bodas/boda (48).jpg';
import foto49 from '../../assets/eventos/bodas/boda (49).jpg';
import foto50 from '../../assets/eventos/bodas/boda (50).jpg';
import foto51 from '../../assets/eventos/bodas/boda (51).jpg';
import foto52 from '../../assets/eventos/bodas/boda (52).jpg';
import foto53 from '../../assets/eventos/bodas/boda (53).jpg';
import foto54 from '../../assets/eventos/bodas/boda (54).jpg';
import foto55 from '../../assets/eventos/bodas/boda (55).jpg';
import foto56 from '../../assets/eventos/bodas/boda (56).jpg';
import foto57 from '../../assets/eventos/bodas/boda (57).jpg';
import foto58 from '../../assets/eventos/bodas/boda (58).jpg';
import foto59 from '../../assets/eventos/bodas/boda (59).jpg';
import foto60 from '../../assets/eventos/bodas/boda (60).jpg';
import foto61 from '../../assets/eventos/bodas/boda (61).jpg';
import foto62 from '../../assets/eventos/bodas/boda (62).jpg';
import foto63 from '../../assets/eventos/bodas/boda (63).jpg';
import foto64 from '../../assets/eventos/bodas/boda (64).jpg';
import foto65 from '../../assets/eventos/bodas/boda (65).jpg';
import foto66 from '../../assets/eventos/bodas/boda (66).jpg';
import foto67 from '../../assets/eventos/bodas/boda (67).jpg';
import foto68 from '../../assets/eventos/bodas/boda (68).jpg';
import foto69 from '../../assets/eventos/bodas/boda (69).jpg';
import foto70 from '../../assets/eventos/bodas/boda (70).jpg';
import foto71 from '../../assets/eventos/bodas/boda (71).jpg';
import foto72 from '../../assets/eventos/bodas/boda (72).jpg';
import foto73 from '../../assets/eventos/bodas/boda (73).jpg';
import foto74 from '../../assets/eventos/bodas/boda (74).jpg';
import foto75 from '../../assets/eventos/bodas/boda (75).jpg';
import foto76 from '../../assets/eventos/bodas/boda (76).jpg';

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
  { id: 46, src: foto46, alt: 'Fotografía de Boda' },
  { id: 47, src: foto47, alt: 'Fotografía de Boda' },
  { id: 48, src: foto48, alt: 'Fotografía de Boda' },
  { id: 49, src: foto49, alt: 'Fotografía de Boda' },
  { id: 50, src: foto50, alt: 'Fotografía de Boda' },
  { id: 51, src: foto51, alt: 'Fotografía de Boda' },
  { id: 52, src: foto52, alt: 'Fotografía de Boda' },
  { id: 53, src: foto53, alt: 'Fotografía de Boda' },
  { id: 54, src: foto54, alt: 'Fotografía de Boda' },
  { id: 55, src: foto55, alt: 'Fotografía de Boda' },
  { id: 56, src: foto56, alt: 'Fotografía de Boda' },
  { id: 57, src: foto57, alt: 'Fotografía de Boda' },
  { id: 58, src: foto58, alt: 'Fotografía de Boda' },
  { id: 59, src: foto59, alt: 'Fotografía de Boda' },
  { id: 60, src: foto60, alt: 'Fotografía de Boda' },
  { id: 61, src: foto61, alt: 'Fotografía de Boda' },
  { id: 62, src: foto62, alt: 'Fotografía de Boda' },
  { id: 63, src: foto63, alt: 'Fotografía de Boda' },
  { id: 64, src: foto64, alt: 'Fotografía de Boda' },
  { id: 65, src: foto65, alt: 'Fotografía de Boda' },
  { id: 66, src: foto66, alt: 'Fotografía de Boda' },
  { id: 67, src: foto67, alt: 'Fotografía de Boda' },
  { id: 68, src: foto68, alt: 'Fotografía de Boda' },
  { id: 69, src: foto69, alt: 'Fotografía de Boda' },
  { id: 70, src: foto70, alt: 'Fotografía de Boda' },
  { id: 71, src: foto71, alt: 'Fotografía de Boda' },
  { id: 72, src: foto72, alt: 'Fotografía de Boda' },
  { id: 73, src: foto73, alt: 'Fotografía de Boda' },
  { id: 74, src: foto74, alt: 'Fotografía de Boda' },
  { id: 75, src: foto75, alt: 'Fotografía de Boda' },
  { id: 76, src: foto76, alt: 'Fotografía de Boda' },
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

  // Dividimos las fotos en 3 columnas equilibradas para optimizar la carga visual
  const columnas = useMemo(() => {
    const cols = [[], [], []];
    fotosBodas.forEach((foto, index) => {
      cols[index % 3].push(foto);
    });
    return cols;
  }, []);

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
        <p>Capturando la esencia del amor en cada detalle.</p>
      </motion.header>

      {/* Galería renderizada por columnas independientes */}
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
        ))}
      </div>

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
            
            <div className="lightbox-content">
              <motion.img 
                src={selectedImg.src} 
                alt={selectedImg.alt}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} 
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