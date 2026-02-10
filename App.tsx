
import React, { useState } from 'react';
import Layout from './components/Layout';
import SEOManager from './components/SEOManager';
import { 
  SERVICES, 
  TESTIMONIALS, 
  FAQS, 
  getIcon, 
  PRIMARY_COLOR, 
  COMPANY_NAME 
} from './constants';
import { ChevronDown, ChevronUp, Star, Play, CheckCircle, ArrowRight } from 'lucide-react';

// --- VISTA DE INICIO (HOME) ---
const HomePage = () => (
  <>
    <SEOManager 
      title={`Agencia SEO Valencia ${COMPANY_NAME} - Posicionamiento Web`}
      description="Expertos en Consultoría SEO en Valencia. Mejoramos tu visibilidad, SEO Local y captación de clientes con estrategias a medida."
    />
    
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-100 rounded-bl-[100px] hidden md:block"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Agencia SEO <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${PRIMARY_COLOR}, #c2185b)` }}>Valencia</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Digitalización de negocios locales y en línea. Mejoramos tu visibilidad en Google para que alcances tus metas comerciales.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#servicios" className="px-8 py-4 rounded-full text-white font-bold text-center transition-all hover:shadow-lg" style={{ backgroundColor: PRIMARY_COLOR }}>
                Ver Servicios
              </a>
              <a href="#contacto" className="px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-bold text-center hover:bg-slate-50 transition-all">
                Pedir Presupuesto
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" className="rounded-3xl shadow-2xl" alt="SEO Dashboard" />
          </div>
        </div>
      </div>
    </section>

    {/* Cluster de Servicios */}
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${PRIMARY_COLOR}10`, color: PRIMARY_COLOR }}>
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Beneficios */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">El mejor posicionamiento web en Valencia</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-600">Al trabajar con nuestra agencia conseguirás:</p>
            <ul className="space-y-4">
              {['Aumento de visibilidad orgánica', 'Captación de leads cualificados', 'Mejor ROI en marketing digital', 'Dominio de tu sector en Google Maps'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-inner">
            <p className="text-slate-600 leading-relaxed italic">
              "Entendemos las necesidades y objetivos de los clientes, y trabajamos incansablemente para crear una presencia en línea que refleje tu marca."
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Sobre Nosotros */}
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">El posicionamiento SEO de {COMPANY_NAME}</h2>
            <p className="text-lg text-slate-600 mb-6">
              Con más de 15 años en el sector, somos expertos en digitalización de negocios locales y en línea.
            </p>
            <p className="text-slate-600 mb-8">
              Mejoramos visibilidad en Google y motores de búsqueda, marketing de contenidos, estrategias de crecimiento de marca en Internet y captación de leads. Conocimiento sobre de las últimas tecnologías y tendencias del marketing digital.
            </p>
            <button className="flex items-center space-x-2 font-bold transition-colors" style={{ color: PRIMARY_COLOR }}>
              <span>Saber más sobre el equipo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" className="rounded-2xl" alt="Team 1" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" className="rounded-2xl mt-8" alt="Team 2" />
          </div>
        </div>
      </div>
    </section>

    {/* Social Proof & FAQs */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Empresas que ya han alcanzado sus objetivos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-24 opacity-50 grayscale">
          {[1,2,3,4,5,6].map(i => <div key={i} className="h-12 bg-slate-300 rounded-lg animate-pulse"></div>)}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 p-6">
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-slate-800">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

// --- VISTA DE EMPRESA (OTRA PÁGINA) ---
const EmpresaPage = () => (
  <>
    <SEOManager 
      title={`Sobre Nosotros - Agencia SEO Valencia ${COMPANY_NAME}`}
      description={`Conoce la historia de ${COMPANY_NAME}, nuestra metodología de trabajo y por qué somos la consultora SEO de confianza en Valencia.`}
    />
    <section className="pt-40 pb-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Nuestra Agencia</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Más de una década transformando negocios a través del posicionamiento orgánico estratégico.
        </p>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Pasión por los resultados</h2>
          <p className="text-slate-600 mb-4">
            En {COMPANY_NAME}, no solo hacemos SEO; construimos activos digitales para nuestros clientes. Nuestra oficina central en Valencia es el núcleo donde diseñamos estrategias que impactan globalmente.
          </p>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" className="rounded-3xl my-12" alt="Oficina Valencia" />
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  // Simulación de enrutamiento simple (en una app real usaríamos react-router-dom)
  const [currentPage, setCurrentPage] = useState<'home' | 'empresa'>('home');

  return (
    <Layout>
      {/* Botones de navegación temporal para demo */}
      <div className="fixed bottom-4 left-4 z-[100] bg-white shadow-xl rounded-full p-1 border flex">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${currentPage === 'home' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
        >
          Ver Home
        </button>
        <button 
          onClick={() => setCurrentPage('empresa')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${currentPage === 'empresa' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
        >
          Ver Empresa
        </button>
      </div>

      {currentPage === 'home' ? <HomePage /> : <EmpresaPage />}
    </Layout>
  );
};

export default App;
