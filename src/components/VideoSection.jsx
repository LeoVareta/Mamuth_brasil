import React from 'react';

const VideoSection = ({ videoUrl }) => {
  // Função para converter links normais do YouTube em links de embed
  const getEmbedUrl = (url) => {
    if (!url) return "";
    
    // Se já for embed, retorna direto
    if (url.includes("embed/")) return url;

    // Se for link normal (watch?v=), extrai o ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <section className="w-full py-16 px-4 bg-white flex justify-center items-center">
      <div className="w-full max-w-3xl mx-auto"> 
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title="Demonstração do Produto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;