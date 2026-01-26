import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Iconos para móvil
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para cambiar el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          J. ARIAS <span>FOTOGRAFÍA</span>
        </Link>

        {/* Menú de escritorio */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/eventos" onClick={() => setIsMobileMenuOpen(false)}>Eventos</NavLink>
          <NavLink to="/portafolio" onClick={() => setIsMobileMenuOpen(false)}>Portafolio</NavLink>
          <NavLink to="/contacto" className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Contáctame</NavLink>
        </div>

        {/* Botón menú móvil */}
        <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;