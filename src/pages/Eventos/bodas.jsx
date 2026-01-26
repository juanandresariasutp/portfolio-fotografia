import React from 'react';
import './EventosDetalle.css'; // Crearemos este CSS ahora

// Importa tus fotos de la carpeta assets/eventos/bodas/
import foto1 from '../../assets/eventos/bodas/boda1.jpg';
import foto2 from '../../assets/eventos/bodas/boda2.jpg';
// ... importa las demás

const fotosBodas = [
  { id: 1, src: foto1, alt: 'Momento de la ceremonia' },
  { id: 2, src: foto2, alt: 'Sesión de novios' },
  // ... añade las demás aquí
];

function Bodas() {
  return (
    <div className="detalle-evento-page">
      <header className="detalle-header">
        <button onClick={() => window.history.back()} className="back-btn">← Volver</button>
        <h1>Bodas</h1>
        <p>Capturando la esencia del amor en cada detalle.</p>
      </header>

      <div className="masonry-grid">
        {fotosBodas.map((foto) => (
          <div key={foto.id} className="masonry-item">
            <img src={foto.src} alt={foto.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bodas;