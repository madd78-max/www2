
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { COMPANY_NAME, PRIMARY_COLOR } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white" 
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            <Rocket className="w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            SEO Valencia <span className="text-[color:var(--primary)]" style={{ color: PRIMARY_COLOR }}>{COMPANY_NAME.replace('[', '').replace(']', '')}</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className={`font-medium hover:text-[color:var(--primary)] transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-900'}`}>Servicios</a>
          <a href="#nosotros" className={`font-medium hover:text-[color:var(--primary)] transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-900'}`}>Nosotros</a>
          <a href="#testimonios" className={`font-medium hover:text-[color:var(--primary)] transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-900'}`}>Opiniones</a>
          <a 
            href="#contacto" 
            className="px-6 py-2.5 rounded-full text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            Contactar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col space-y-4">
          <a href="#servicios" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">Servicios</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">Nosotros</a>
          <a href="#testimonios" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">Opiniones</a>
          <a 
            href="#contacto" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-6 py-3 rounded-lg text-white font-bold"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            Solicitar Auditoría Gratis
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
