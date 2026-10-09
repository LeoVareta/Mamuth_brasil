import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useTranslation } from 'react-i18next';
import seloParker from "@/assets/images/selo-certificado-parker.png";
import seloFalch from "@/assets/images/logo_falch_certificado.png";
import certificadoParker from "@/assets/images/certificado_mamuth.jpg";
import certificadoFalch from "@/assets/images/certificado_falch_pt.jpg";

export default function CertificacoesSection() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { t } = useTranslation(); 

  return (
    <section
      className="py-10 md:py-12 text-white relative overflow-hidden"
      style={{ backgroundColor: "var(--color-dark-blue)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO INSTITUCIONAL */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block px-3.5 py-1 mb-1.5 md:px-3 md:py-0.5 text-xs font-semibold tracking-widest text-[#FF5101] uppercase bg-[#FF5101]/10 border border-[#FF5101]/20 rounded-full">
            {t('certificado.badge', 'Reconhecimento & Conformidade')}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-1 text-white tracking-tight">
            {t('certificado.titulo', 'Nossas Certificações')}
          </h2>
          
          <div className="w-12 h-1 bg-[#FF5101] mx-auto my-2 rounded-full" />
          
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 leading-snug">
            {t(
              'certificado.subtitulo',
              'A Mamuth Brasil é distribuidora oficial Parker Polyflex e Falch em todo o território nacional, assegurando qualidade e procedência em cada solução. Confira nossas certificações.'
            )}
          </p>
        </div>

        {/* GRID DE CERTIFICAÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          
          {/* COLUNA 1 - Parker */}
          <motion.div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center justify-center">
              <img 
                src={seloParker} 
                alt="Certificação Parker" 
                className="w-36 md:w-44 h-auto object-contain drop-shadow-lg" 
              />
            </div>
            
            <button
              onClick={() => setSelectedImg(certificadoParker)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 md:py-2.5 rounded-xl bg-[#FF5101] hover:bg-[#e54800] active:scale-[0.98] transition-all duration-200 text-white text-sm uppercase font-bold tracking-wider shadow-lg shadow-[#FF5101]/20"
            >
              <span>{t('certificado.btnCertificado', 'Visualizar Certificado')}</span>
              <ExternalLink size={16} />
            </button>
          </motion.div>

          {/* COLUNA 2 - Falch */}
          <motion.div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center justify-center">
              <img 
                src={seloFalch} 
                alt="Certificação Falch" 
                className="w-36 md:w-44 h-auto object-contain drop-shadow-lg" 
              />
            </div>
            
            <button
              onClick={() => setSelectedImg(certificadoFalch)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 md:py-2.5 rounded-xl bg-[#FF5101] hover:bg-[#e54800] active:scale-[0.98] transition-all duration-200 text-white text-sm uppercase font-bold tracking-wider shadow-lg shadow-[#FF5101]/20"
            >
              <span>{t('certificado.btnCertificado', 'Visualizar Certificado')}</span>
              <ExternalLink size={16} />
            </button>
          </motion.div>

        </div>
      </div>

      {/* MODAL DE VISUALIZAÇÃO */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-900 border border-white/10 rounded-2xl p-3 md:p-6 max-w-2xl w-full max-h-[90vh] flex flex-col items-center justify-center shadow-2xl"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition z-20"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>

              <img
                src={selectedImg}
                alt="Certificado Ampliado"
                className="max-w-full max-h-[80vh] h-auto w-auto rounded-lg object-contain shadow-md"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}