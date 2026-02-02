import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Nuevo estado para controlar el dropdown en móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Función para alternar el dropdown solo en móvil
  const toggleDropdown = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          J. ARIAS <span>FOTOGRAFÍA</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Inicio</NavLink>
          
          {/* Item: Eventos con control de estado */}
          <div className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button 
              className="dropdown-trigger" 
              onClick={toggleDropdown}
              style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}
            >
              Eventos <ChevronDown size={14} className={isDropdownOpen ? 'rotate' : ''} />
            </button>
            
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="/eventos/bodas" onClick={closeMenu}>Bodas</Link>
              <Link to="/eventos/Quinces" onClick={closeMenu}>15 Años</Link>
              <Link to="/eventos/cumpleanos" onClick={closeMenu}>Cumpleaños</Link>
              <Link to="/eventos/bautizos" onClick={closeMenu}>Bautizos</Link>
            </div>
          </div>

          <NavLink to="/deportes" onClick={closeMenu}>Deportes</NavLink>

          <NavLink to="https://wa.me/573207161427" className="nav-btn" onClick={closeMenu}>Contáctame</NavLink>
        </div>

        <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;