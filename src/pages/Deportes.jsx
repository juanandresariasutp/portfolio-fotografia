import React, { useState } from 'react'; // Agregado useState
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Importar Lightbox y sus estilos
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// Importar estilos base de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import './Deportes.css';

const procesarImagenes = (imagenesRaw) => {
  return Object.values(imagenesRaw).map((img, index) => ({
    id: index,
    src: img.default || img
  }));
};

const futbolFotos = procesarImagenes(import.meta.glob('../assets/Deportes/Futbol/*.{jpg,JPG,jpeg,PNG,png}', { eager: true }));
const runningFotos = procesarImagenes(import.meta.glob('../assets/Deportes/Running/*.{jpg,JPG,jpeg,PNG,png}', { eager: true }));
const voleibolFotos = procesarImagenes(import.meta.glob('../assets/Deportes/Voleibol/*.{jpg,JPG,jpeg,PNG,png}', { eager: true }));
const baloncestoFotos = procesarImagenes(import.meta.glob('../assets/Deportes/Baloncesto/*.{jpg,JPG,jpeg,PNG,png}', { eager: true }));

const deportesData = [
  { id: "futbol", titulo: "Fútbol", fotos: futbolFotos, color: "#ff4d4d" },
  { id: "running", titulo: "Running", fotos: runningFotos, color: "#4dff88" },
  { id: "voleibol", titulo: "Voleibol", fotos: voleibolFotos, color: "#4da6ff" },
  { id: "basket", titulo: "Baloncesto", fotos: baloncestoFotos, color: "#ffcc4d" }
];

const DeporteSection = ({ deporte }) => {
  // Estado para controlar qué imagen está abierta en el Lightbox (-1 significa cerrado)
  const [index, setIndex] = useState(-1);

  // Mapeamos las fotos al formato que requiere el Lightbox
  const slides = deporte.fotos.map((foto) => ({ src: foto.src }));

  return (
    <section className="deporte-section">
      <h2 className="deporte-titulo" style={{ borderLeft: `4px solid ${deporte.color}` }}>
        {deporte.titulo}
      </h2>
      
      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={"auto"} 
          loop={true} 
          navigation={{
            prevEl: `.prev-${deporte.id}`,
            nextEl: `.next-${deporte.id}`,
          }}
          className="deportes-swiper"
        >
          {deporte.fotos.map((foto, i) => (
            <SwiperSlide key={`${deporte.id}-${i}`} style={{ width: 'auto' }}>
              {/* Agregamos el onClick para abrir la imagen y cambiamos el cursor con inline style o CSS */}
              <div 
                className="carousel-item" 
                onClick={() => setIndex(i)}
                style={{ cursor: 'zoom-in' }}
              >
                <img src={foto.src} alt={deporte.titulo} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Componente Lightbox */}
        <Lightbox
          index={index}
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Zoom]}
          // Opcional: Configuración del zoom
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
          }}
        />

        {/* CONTROLES DEBAJO CENTRADOS */}
        <div className="controls-container">
          <button className={`control-btn prev-${deporte.id}`} aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>
          <button className={`control-btn next-${deporte.id}`} aria-label="Siguiente">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Deportes = () => {
  return (
    <div className="deportes-page">
      <div className="category-nav">
        <button onClick={() => window.history.back()} className="back-btn">
          <ArrowLeft size={20} /> <span>Volver</span>
        </button>
      </div>

      <header className="deportes-header">
        <h1>Deportes</h1>
        <div className="header-line"></div>
      </header>

      <div className="deportes-content">
        {deportesData.map((deporte) => (
          deporte.fotos.length > 0 ? (
            <DeporteSection key={deporte.id} deporte={deporte} />
          ) : (
            <section key={deporte.id} className="deporte-section">
              <h2 className="deporte-titulo" style={{ borderLeft: `4px solid ${deporte.color}` }}>
                {deporte.titulo}
              </h2>
              <div className="no-photos-msg">
                <p>No se encontraron fotos de {deporte.titulo}.</p>
              </div>
            </section>
          )
        ))}
      </div>
    </div>
  );
};

export default Deportes;