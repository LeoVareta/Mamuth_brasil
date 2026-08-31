import React from 'react';
import { Link } from 'react-router-dom';

// IMPORTANTE: Oriente o time de dev a salvar as imagens na pasta de assets
import LavadoraTyphoon from '../assets/images/Typhoon-Jet-50cv-eletrica-2.png';
// Se tiverem uma ilustração isolada do mamute, importam aqui. Caso contrário, usamos um elemento visual limpo.
import BgOrcamento from '../assets/images/bg-cta.png'; 

export default function Pagina404() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-between font-sans text-[#1E2249]">

      {/* CONTEÚDO PRINCIPAL DA 404 */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${BgOrcamento})`, opacity: 0.98 }}>
        
        <div className="max-w-3xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1E2249] mb-4">
            Página Não Encontrada
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-xl mx-auto mb-8">
            Oops! Parece que o nosso sistema de <span className="text-[#FF6600] font-bold">alta pressão</span> não localizou a rota solicitada. Mas não se preocupe, voltar ao caminho certo é rápido.
          </p>

          {/* BOTÕES DE DIRECIONAMENTO */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/" 
              className="px-8 py-3 bg-[#1E2249] text-white font-bold rounded-lg hover:bg-[#FF6600] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
            >
              Ir para Home
            </Link>
            <Link 
              to="/produtos" 
              className="px-8 py-3 bg-transparent border-2 border-[#1E2249] text-[#1E2249] font-bold rounded-lg hover:bg-[#1E2249] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Ver Nossos Produtos
            </Link>
          </div>

          {/* COMPOSIÇÃO VISUAL (Substituído o robô pela Lavadora Real Typhoon Jet) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-6">
            
            {/* Bloco do Erro / Código */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-8xl font-black text-gray-200 select-none tracking-widest">
                404
              </span>
              <div className="h-1 w-20 bg-[#FF6600] rounded mt-2"></div>
            </div>

            {/* Imagem Real da Lavadora que você enviou */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6600] to-[#1E2249] rounded-xl blur opacity-20 animate-pulse"></div>
              <img 
                src={LavadoraTyphoon} 
                alt="Lavadora de Alta Pressão Typhoon Jet Mamuth" 
                className="relative max-h-56 md:max-h-64 w-auto object-contain drop-shadow-2xl rounded-lg"
              />
            </div>

          </div>

        </div>
      </main>
      </div>
  );
}