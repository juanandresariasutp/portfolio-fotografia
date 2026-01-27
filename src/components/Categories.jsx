// Importamos el componente Link de react-router-dom para navegar entre páginas sin recargar el navegador
import { Link } from 'react-router-dom';
// Importamos los estilos específicos para esta sección
import './Categories.css';

function Categories() {
  // Definimos un arreglo de objetos que contiene la información de cada categoría para no repetir código manualmente
  const categories = [
    { title: 'Eventos', path: '/eventos', class: 'cat-eventos' },
    { title: 'Deportes', path: '/deportes', class: 'cat-deportes' },
    { title: 'Gastronómica', path: '/gastronomia', class: 'cat-gastronomia' },
    { title: 'Retratos', path: '/retratos', class: 'cat-retratos' },
  ];

  return (
    // Contenedor principal de la sección con un ID para poder enlazarlo desde el Navbar (anclajes)
    <section className="categories-section" id="categories">
      
      {/* Encabezado de la sección que agrupa el título y la línea decorativa */}
      <div className="categories-header">
        {/* Título visual de la sección */}
        <h3 className="categories-title">Mi trabajo</h3>
        {/* Div vacío que usamos en CSS para crear la línea elegante con degradado junto al título */}
        <div className="title-line"></div>
      </div>

      {/* Contenedor tipo Grid donde se mostrarán todas las tarjetas */}
      <div className="categories-grid">
        {/* Usamos .map() para recorrer el arreglo 'categories' y generar una tarjeta por cada objeto */}
        {categories.map((cat, index) => (
          /* Link actúa como una etiqueta <a> pero gestionada por React Router. 
             'key' es obligatorio en React para identificar cada elemento de la lista. 
             'className' combina una clase fija y una dinámica (ej: cat-eventos) para poner fondos distintos. */
          <Link key={index} to={cat.path} className={`category-card ${cat.class}`}>
            
            {/* Div para el efecto de oscurecimiento o tinte de color sobre la imagen de fondo */}
            <div className="category-overlay"></div>
            
            {/* Texto principal que aparece en el centro de la tarjeta */}
            <span className="category-text">{cat.title}</span>
            
            {/* Div decorativo que usaremos en CSS para crear el recuadro que se anima en el hover */}
            <div className="category-border"></div>
            
          </Link>
        ))}
      </div>
    </section>
  );
}

// Exportamos el componente para poder usarlo en App.jsx o en cualquier otra parte del proyecto
export default Categories;