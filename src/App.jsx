import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Aurora from './components/Aurora/Aurora'; // <-- Importamos Aurora
import WhatsAppButton from './components/WhatsAppButton';

// Páginas
import Eventos from './pages/Eventos';
import Bodas from './pages/Eventos/bodas';
import Quinces from './pages/Eventos/Quinces';

// Componente para resetear el scroll
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Componente interno para manejar las animaciones de ruta
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Ruta Principal: Home */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Hero />
              <Categories />
              <Contact />
            </PageTransition>
          }
        />

        {/* Ruta de Menú de Eventos */}
        <Route path="/eventos" element={
          <PageTransition>
            <Eventos />
          </PageTransition>
        } />

        {/* --- RUTAS DE SUB-EVENTOS --- */}
        <Route path="/eventos/bodas" element={
          <PageTransition>
            <Bodas />
          </PageTransition>
        } />
        
        <Route path="/eventos/Quinces" element={
          <PageTransition>
            <Quinces />
          </PageTransition>
        } />
        
        <Route path="/eventos/cumpleanos" element={
          <PageTransition>
            <div className="page-placeholder">Página de Cumpleaños en construcción</div>
          </PageTransition>
        } />
        
        <Route path="/eventos/bautizos" element={
          <PageTransition>
            <div className="page-placeholder">Página de Bautizos en construcción</div>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    /* Se añade el basename para que las rutas funcionen en la subcarpeta de GitHub Pages */
    <BrowserRouter basename="/portfolio-fotografia">
      {/* Aurora se coloca aquí para que sirva de fondo global */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, overflow: 'hidden' }}>
        <Aurora
          colorStops={["#000001", "#201f49", "#0f021c"]}
          blend={1}
          amplitude={1.2}
          speed={1.2}
        />
      </div>

      <ScrollToTop />
      <Navbar />
      
      {/* Llamamos al componente que tiene las rutas y las animaciones */}
      <AnimatedRoutes />
      {/* Botón de WhatsApp Global */}
      <WhatsAppButton />
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;