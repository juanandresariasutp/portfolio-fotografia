import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; // Para un icono de volver más estético

// Importa las fotos
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

// Variantes de animación para la cuadrícula
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Hace que las cartas aparezcan una tras otra
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

function Eventos() {
  return (
    <motion.section 
      className="category-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="category-nav">
        <button onClick={() => window.history.back()} className="back-btn">
          <ArrowLeft size={20} /> <span>Volver</span>
        </button>
      </div>

      <motion.div className="category-header" variants={cardVariants}>
        <h1>Eventos</h1>
        <div className="header-line"></div>
        <p>Capturando momentos inolvidables en tus celebraciones más especiales.</p>
      </motion.div>

      <motion.div className="photo-grid" variants={containerVariants}>
        {subEventos.map((item) => (
          <motion.div key={item.id} variants={cardVariants} whileHover={{ y: -10 }}>
            <Link to={item.path} className="sub-category-card">
              <div className="image-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-overlay">
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <div className="explore-text">Explorar Galería</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Eventos;