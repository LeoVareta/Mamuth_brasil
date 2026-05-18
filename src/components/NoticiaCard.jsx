import React from 'react';

const NoticiaCard = ({ imagem, titulo, subtitulo, resumo, linkSaibaMais, linkDownload }) => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[160px] bg-gray-50 border-b-2 border-[#0e0e68] mb-5 overflow-hidden items-center shadow-sm">
      
      {/* Lado Esquerdo: Imagem */}
      <div className="w-full md:w-[350px] h-auto md:h-auto flex-shrink-0">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lado Direito: Conteúdo */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center w-full">
        <h3 className="text-[#0e0e68] text-lg font-bold tracking-wide uppercase m-0">
          {titulo}
        </h3>
        
        <h4 className="text-gray-500 text-sm font-normal mt-1 mb-2">
          {subtitulo}
        </h4>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {resumo}
        </p>
        
        {/* Botões */}
        <div className="flex items-center gap-4">
          <a 
            href={linkSaibaMais} 
            className="text-[#ff5100] font-bold border border-[#ff5100] px-4 py-1 text-sm rounded hover:bg-[#ff5100] hover:text-white transition-colors duration-300"
          >
            Saiba Mais
          </a>
          
          {linkDownload && (
            <a target="_blank"
              href={linkDownload} 
              className="text-[#0e0e68] text-sm font-medium underline hover:text-[#ff5100] transition-colors flex items-center gap-1"
            >
              📥 Download PDF
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default NoticiaCard;


// import React from 'react';

// const NoticiaCard = ({ imagem, titulo, subtitulo, resumo, linkSaibaMais, linkDownload }) => {
//   return (
//     <div className="flex flex-col md:flex-row w-full min-h-[160px] bg-gray-50 border-b-2 border-[#0e0e68] mb-5 overflow-hidden items-center shadow-sm">
      
//       {/* Lado Esquerdo: Imagem */}
//       <div className="w-full md:w-[350px] h-48 md:h-full flex-shrink-0 self-stretch">
//         <img 
//           src={imagem} 
//           alt={titulo} 
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Lado Direito: Conteúdo */}
//       <div className="flex-1 p-4 md:p-6 flex flex-col justify-center w-full">
//         <h3 className="text-[#0e0e68] text-lg font-bold tracking-wide uppercase m-0">
//           {titulo}
//         </h3>
        
//         <h4 className="text-gray-500 text-sm font-normal mt-1 mb-2">
//           {subtitulo}
//         </h4>
        
//         <p className="text-gray-700 text-sm leading-relaxed mb-4">
//           {resumo}
//         </p>
        
//         {/* Botões */}
//         <div className="flex items-center gap-4">
//           <a 
//             href={linkSaibaMais} 
//             className="text-[#ff5100] font-bold border border-[#ff5100] px-4 py-1 text-sm rounded hover:bg-[#ff5100] hover:text-white transition-colors duration-300"
//           >
//             Saiba Mais
//           </a>
          
//           {linkDownload && (
//             <button 
//               onClick={() => {
//                 // 1. Faz uma requisição ao arquivo PDF
//                 fetch(linkDownload)
//                   .then(response => response.blob())
//                   .then(blob => {
//                     // 2. Cria um link virtual na memória do navegador
//                     const url = window.URL.createObjectURL(blob);
//                     const a = document.createElement('a');
//                     a.href = url;
//                     // 3. Define o nome que o arquivo terá ao ser baixado
//                     a.download = "catalogo-fecasucro.pdf"; 
//                     document.body.appendChild(a);
//                     // 4. Simula o clique invisível para forçar o download real
//                     a.click();
//                     // 5. Limpa a memória
//                     a.remove();
//                     window.URL.revokeObjectURL(url);
//                   })
//                   .catch(() => {
//                     // Caso falhe por algum motivo, abre em nova aba como plano B
//                     window.open(linkDownload, '_blank');
//                   });
//               }}
//               className="text-[#0e0e68] text-sm font-medium underline hover:text-[#ff5100] transition-colors flex items-center gap-1 cursor-pointer"
//             >
//               📥 Download PDF
//             </button>
//           )}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default NoticiaCard;