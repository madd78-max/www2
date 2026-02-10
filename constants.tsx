
import React from 'react';
import { 
  Search, 
  MapPin, 
  BarChart3, 
  Settings, 
  Layout, 
  Key, 
  FileText, 
  Zap,
  CheckCircle2,
  TrendingUp,
  Target,
  Users
} from 'lucide-react';
import { Service, Testimonial, FAQItem } from './types';

export const COMPANY_NAME = "[NOMBRE DE LA EMPRESA]";
export const PRIMARY_COLOR = "#880e4f";

export const SERVICES: Service[] = [
  {
    title: "Auditoría SEO",
    description: "Análisis exhaustivo de tu sitio web para identificar fallos técnicos y oportunidades de mejora.",
    icon: "search"
  },
  {
    title: "Consultoría SEO",
    description: "Asesoramiento personalizado para trazar el camino hacia las primeras posiciones de Google.",
    icon: "bar-chart"
  },
  {
    title: "SEO Local",
    description: "Dominamos el posicionamiento en Google Maps para atraer clientes de tu zona geográfica.",
    icon: "map-pin"
  },
  {
    title: "SEO Técnico",
    description: "Optimizamos el código, velocidad y rastreabilidad para que Google adore tu web.",
    icon: "settings"
  },
  {
    title: "SEO Estratégico",
    description: "Planes a largo plazo basados en datos reales para superar a tu competencia directa.",
    icon: "trending-up"
  },
  {
    title: "Arquitectura Web",
    description: "Diseñamos una estructura lógica que mejora la indexación y la experiencia de usuario.",
    icon: "layout"
  },
  {
    title: "Keyword Research",
    description: "Investigamos los términos que tus clientes reales buscan para convertir visitas en ventas.",
    icon: "key"
  },
  {
    title: "Marketing de Contenidos",
    description: "Creamos textos persuasivos y optimizados que educan a tu audiencia y atraen tráfico cualificado.",
    icon: "file-text"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Ruiz",
    role: "CEO",
    company: "Inmuebles Valencia",
    text: "Desde que empezamos con la consultoría SEO de [NOMBRE DE LA EMPRESA], nuestras llamadas de clientes potenciales se han triplicado. El retorno de inversión ha sido increíble.",
    rating: 5
  },
  {
    name: "Elena Marín",
    role: "Directora de Marketing",
    company: "EcoShop",
    text: "Su enfoque en el SEO local nos puso en el mapa. Literalmente. Ahora aparecemos los primeros cuando alguien busca nuestros productos en Valencia.",
    rating: 5
  },
  {
    name: "Jorge Sanz",
    role: "Fundador",
    company: "TechSolutions SL",
    text: "La auditoría técnica fue reveladora. Solucionaron problemas que no sabíamos que teníamos y la web vuela ahora mismo.",
    rating: 4
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto tiempo tarda en verse resultados con el SEO?",
    answer: "El SEO es una estrategia a medio y largo plazo. Generalmente, se empiezan a notar mejoras significativas entre el tercer y sexto mes, dependiendo de la competencia y el estado inicial de la web."
  },
  {
    question: "¿Por qué necesito SEO Local en Valencia?",
    answer: "Si tienes un negocio físico o prestas servicios en la zona, el SEO Local te permite aparecer en los resultados destacados de Google Maps, captando clientes que buscan soluciones inmediatas cerca de ellos."
  },
  {
    question: "¿Garantizan el primer puesto en Google?",
    answer: "Nadie puede garantizar el primer puesto de forma honesta, ya que el algoritmo de Google cambia constantemente. Lo que sí garantizamos es un aumento real de visibilidad, tráfico cualificado y una estrategia basada en las mejores prácticas actuales."
  },
  {
    question: "¿Qué incluye vuestra consultoría SEO estratégica?",
    answer: "Incluye análisis de competencia, definición de objetivos (KPIs), investigación de palabras clave avanzada, optimización on-page y off-page, y un seguimiento mensual detallado de resultados."
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case "search": return <Search className="w-8 h-8" />;
    case "map-pin": return <MapPin className="w-8 h-8" />;
    case "bar-chart": return <BarChart3 className="w-8 h-8" />;
    case "settings": return <Settings className="w-8 h-8" />;
    case "layout": return <Layout className="w-8 h-8" />;
    case "key": return <Key className="w-8 h-8" />;
    case "file-text": return <FileText className="w-8 h-8" />;
    case "trending-up": return <TrendingUp className="w-8 h-8" />;
    default: return <Zap className="w-8 h-8" />;
  }
};
