import { Link } from 'react-router-dom';
// Importa las fotos que usarás como portada para cada categoría
import imgBodas from '../assets/eventos/boda-portada.jpg';
import img15Anos from '../assets/eventos/15-anos-portada.jpg';
import imgCumple from '../assets/eventos/cumple-portada.jpg';
import imgBautizos from '../assets/eventos/bautizo-portada.jpg';

const subEventos = [
  { id: 1, title: 'Bodas', img: imgBodas, path: '/eventos/bodas' },
  { id: 2, title: '15 Años', img: img15Anos, path: '/eventos/15-anos' },
  { id: 3, title: 'Cumpleaños', img: imgCumple, path: '/eventos/cumpleanos' },
  { id: 4, title: 'Bautizos & Comuniones', img: imgBautizos, path: '/eventos/bautizos' },
];

function Eventos() {
  return (
    <section className="category-page">
      <div className="category-header">
        <h1>Eventos</h1>
        <p>Capturando momentos inolvidables en tus celebraciones más especiales.</p>
      </div>

      <div className="photo-grid">
        {subEventos.map((item) => (
          <Link to={item.path} key={item.id} className="sub-category-card">
            <img src={item.img} alt={item.title} />
            <div className="card-overlay">
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Eventos;