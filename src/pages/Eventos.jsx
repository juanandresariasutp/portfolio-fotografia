import img1 from '../assets/eventos/evento1.jpg';
import img2 from '../assets/eventos/evento2.jpg';
import img3 from '../assets/eventos/evento3.jpg';
import img4 from '../assets/eventos/evento4.jpg';

function Eventos() {
  return (
    <section className="category-page">
      <h1>Eventos</h1>
      <p>Fotografía de eventos sociales, corporativos y culturales.</p>

      <div className="photo-grid">
        <img src={img1} alt="Evento 1" />
        <img src={img2} alt="Evento 2" />
        <img src={img3} alt="Evento 3" />
        <img src={img4} alt="Evento 4" />
      </div>
    </section>
  );
}

export default Eventos;
