
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  SERVICES, 
  TESTIMONIALS, 
  FAQS, 
  getIcon, 
  PRIMARY_COLOR, 
  COMPANY_NAME 
} from './constants';
import { ChevronDown, ChevronUp, Star, Play, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-100 rounded-bl-[100px] hidden md:block"></div>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <div 
                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
                  style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
                >
                  <span className="animate-pulse w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></span>
                  <span>Agencia SEO Líder en Valencia</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                  Agencia SEO <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${PRIMARY_COLOR}, #c2185b)` }}>Valencia</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                  Digitalizamos negocios locales y en línea. Mejoramos tu visibilidad en Google y motores de búsqueda para que dejes de perseguir clientes y empieces a atraerlos.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="#servicios" 
                    className="px-8 py-4 rounded-full text-white font-bold text-center transition-all hover:shadow-lg hover:translate-y-[-2px]"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    Nuestros Servicios
                  </a>
                  <a 
                    href="#nosotros" 
                    className="px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-bold text-center hover:bg-slate-50 transition-all"
                  >
                    Sobre Nosotros
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img 
                  src="https://picsum.photos/seed/seo-valencia/800/600" 
                  alt="Marketing Digital Valencia" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px] md:h-[500px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-slate-800">+250 Clientes</span>
                  </div>
                  <div className="text-xs text-slate-500">Logrando sus objetivos de negocio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid (Cluster) */}
        <section id="servicios" className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">La consultoría SEO que da resultados</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluciones integrales de posicionamiento orgánico diseñadas para maximizar tu captación de leads y visibilidad de marca.
            </p>
          </div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-xl hover:bg-white group"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${PRIMARY_COLOR}10`, color: PRIMARY_COLOR }}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">El mejor posicionamiento web en Valencia</h2>
                <div className="space-y-6">
                  {[
                    { title: "Dominio de Búsquedas Locales", desc: "Aparece cuando tus vecinos buscan lo que ofreces." },
                    { title: "Tráfico de Alta Calidad", desc: "No queremos solo visitas, queremos compradores potenciales." },
                    { title: "Autoridad de Marca", desc: "Ser el #1 en Google transmite una confianza inigualable." },
                    { title: "Resultados Mensurables", desc: "Informes claros donde verás crecer tus clics y llamadas." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                     <div className="text-4xl font-extrabold text-slate-900 mb-2">15+</div>
                     <div className="text-sm text-slate-500 font-medium">Años de Experiencia</div>
                   </div>
                   <img src="https://picsum.photos/seed/office1/400/500" className="rounded-2xl h-64 w-full object-cover" alt="SEO Experts" />
                </div>
                <div className="space-y-4 pt-8">
                   <img src="https://picsum.photos/seed/office2/400/500" className="rounded-2xl h-64 w-full object-cover" alt="Valencia Team" />
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center" style={{ borderBottom: `4px solid ${PRIMARY_COLOR}` }}>
                     <div className="text-4xl font-extrabold text-slate-900 mb-2">98%</div>
                     <div className="text-sm text-slate-500 font-medium">Clientes Satisfechos</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
              <div className="lg:w-1/2 relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">El posicionamiento SEO de {COMPANY_NAME}</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Con más de 15 años en el sector, entendemos que cada negocio es único. No aplicamos recetas mágicas, sino estrategias basadas en las últimas tecnologías y tendencias del marketing digital.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Nuestro equipo de consultores SEO en Valencia trabaja incansablemente para crear una presencia en línea que no solo refleje tu marca, sino que te ayude a alcanzar las metas reales de tu empresa: captación de leads y crecimiento sostenido.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <Play className="w-5 h-5 fill-slate-900 text-slate-900 ml-1" />
                  </div>
                  <span className="text-white font-semibold">Mira nuestra metodología en 2 minutos</span>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
                     <h4 className="text-white font-bold mb-2">Visibilidad en Google</h4>
                     <p className="text-slate-400 text-sm italic">"Su conocimiento sobre de las últimas tecnologías es asombroso."</p>
                   </div>
                   <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 mt-6">
                     <h4 className="text-white font-bold mb-2">Crecimiento de Marca</h4>
                     <p className="text-slate-400 text-sm italic">"Entienden las necesidades y objetivos de los clientes."</p>
                   </div>
                   <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
                     <h4 className="text-white font-bold mb-2">Captación de Leads</h4>
                     <p className="text-slate-400 text-sm italic">"Resultados tangibles desde el primer trimestre."</p>
                   </div>
                   <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 mt-6">
                     <h4 className="text-white font-bold mb-2">Marketing Contenidos</h4>
                     <p className="text-slate-400 text-sm italic">"Textos que realmente conectan con el usuario final."</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Grid */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">Empresas que ya han alcanzado sus objetivos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex justify-center grayscale hover:grayscale-0 transition-all">
                  <img src={`https://picsum.photos/seed/logo${i}/150/50?grayscale`} alt={`Cliente ${i}`} className="max-h-8" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Block */}
        <section id="testimonios" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-slate-600">Nuestra mejor garantía es el éxito de quienes ya confían en nosotros.</p>
          </div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                    <img src={`https://i.pravatar.cc/100?img=${i+30}`} className="w-12 h-12 rounded-full" alt={t.name} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-slate-500 text-xs">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="preguntas" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Preguntas frecuentes sobre SEO</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-bold text-slate-800">{faq.question}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  {openFaq === i && (
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 text-center">
            <div 
              className="max-w-4xl mx-auto rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">La consultoría SEO que da resultados</h2>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                ¿Hablamos sobre tu proyecto? Realizamos un diagnóstico inicial sin compromiso para identificar tus principales vías de crecimiento.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                <a 
                  href="mailto:info@seovalencia.com" 
                  className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:shadow-xl transition-all hover:scale-105"
                  style={{ color: PRIMARY_COLOR }}
                >
                  Solicitar Auditoría Gratis
                </a>
                <a 
                  href="tel:+34960000000" 
                  className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
