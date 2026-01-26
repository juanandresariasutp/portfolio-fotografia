import { Link } from 'react-router-dom';


function Categories() {
  return (
    <section className="categories-section">
      <h3 className="categories-title">Mi trabajo</h3>

      <div className="categories-grid">
        <Link to="/eventos" className="category-card">
        Eventos
        </Link>


        <a href="/deportes" className="category-card">
          Deportes
        </a>

        <a href="/gastronomia" className="category-card">
          Gastronómica
        </a>

        <a href="/retratos" className="category-card">
          Retratos
        </a>
      </div>
    </section>
  );
}

export default Categories;
