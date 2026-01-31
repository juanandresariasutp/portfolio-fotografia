import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react'; // Añadimos ChevronDown
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          J. ARIAS <span>FOTOGRAFÍA</span>
        </Link>

        {/* Menú de escritorio y móvil */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Inicio</NavLink>
          
          {/* NUEVO: Item con Dropdown */}
          <div className="nav-dropdown">
            <NavLink to="/eventos" onClick={closeMenu} className="dropdown-trigger">
              Eventos <ChevronDown size={14} />
            </NavLink>
            <div className="dropdown-content">
              <Link to="/eventos/bodas" onClick={closeMenu}>Bodas</Link>
              <Link to="/eventos/Quinces" onClick={closeMenu}>15 Años</Link>
              <Link to="/eventos/cumpleanos" onClick={closeMenu}>Cumpleaños</Link>
              <Link to="/eventos/bautizos" onClick={closeMenu}>Bautizos</Link>
            </div>
          </div>

          <NavLink to="https://wa.me/3207161427" className="nav-btn" onClick={closeMenu}>Contáctame</NavLink>
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