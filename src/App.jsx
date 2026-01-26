import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Componentes de la Home
import Hero from './components/Hero';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Páginas Principales
import Eventos from './pages/Eventos';
import Bodas from './pages/Eventos/bodas';

// Componente para resetear el scroll al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Esto asegura que el usuario siempre empiece arriba en cada página */}
      <ScrollToTop />
      
      <Routes>
        {/* Ruta Principal: Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Contact />
            </>
          }
        />

        {/* Ruta de Menú de Eventos */}
        <Route path="/eventos" element={<Eventos />} />

        {/* --- RUTAS DE SUB-EVENTOS --- */}
        <Route path="/eventos/bodas" element={<Bodas />} />
        
        {/* Placeholders para futuras páginas */}
        <Route path="/eventos/15-anos" element={<div className="page-placeholder">Página de 15 Años en construcción</div>} />
        <Route path="/eventos/cumpleanos" element={<div className="page-placeholder">Página de Cumpleaños en construcción</div>} />
        <Route path="/eventos/bautizos" element={<div className="page-placeholder">Página de Bautizos en construcción</div>} />
      </Routes>
      
      {/* El Footer siempre visible al final de todas las rutas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;