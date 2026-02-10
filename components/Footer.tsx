
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { COMPANY_NAME, PRIMARY_COLOR } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">SEO Valencia {COMPANY_NAME}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transformamos la presencia digital de negocios en Valencia y toda España mediante estrategias SEO centradas en resultados tangibles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[color:var(--primary)] transition-colors" style={{ '--primary': PRIMARY_COLOR } as any}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[color:var(--primary)] transition-colors" style={{ '--primary': PRIMARY_COLOR } as any}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[color:var(--primary)] transition-colors" style={{ '--primary': PRIMARY_COLOR } as any}>
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Servicios SEO</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Auditoría SEO Técnica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Local en Valencia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoría Estratégica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Link Building Ético</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Optimización de Contenidos</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#preguntas" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog de Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contacto">
            <h4 className="text-white font-bold mb-6">Contacto Directo</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[color:var(--primary)] mt-1" style={{ color: PRIMARY_COLOR }} />
                <span>Carrer de Colón, Valencia, España</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[color:var(--primary)]" style={{ color: PRIMARY_COLOR }} />
                <span>+34 960 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[color:var(--primary)]" style={{ color: PRIMARY_COLOR }} />
                <span>info@seovalencia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Consultoría SEO Valencia {COMPANY_NAME}. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado para la máxima visibilidad en Google.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
