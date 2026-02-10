
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

const SEOManager: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    // Actualizar el título de la pestaña
    document.title = title;

    // Actualizar la meta descripción
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Actualizar etiquetas Open Graph para consistencia
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    
  }, [title, description]);

  return null; // Este componente no renderiza nada visual, solo gestiona el head
};

export default SEOManager;
