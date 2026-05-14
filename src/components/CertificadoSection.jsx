import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import seloParker from "@/assets/images/selo-certificado-parker.png";
import seloFalch from "@/assets/images/logo_falch_certificado.png";
import certificadoParker from "@/assets/images/certificado_mamuth.jpg";
import certificadoFalch from "@/assets/images/certificado_falch_pt.jpg";

export default function CertificacoesSection() {
  // Agora o estado guarda a URL da imagem selecionada ou null
  const [selectedImg, setSelectedImg] = useState(null);
  const {t} = useTranslation(); 

  return (
    <section
      className="py-10 text-white relative"
      style={{ backgroundColor: "var(--color-dark-blue)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* COLUNA 1 - Parker */}
          <motion.div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src={seloParker} alt="Certificação Parker" className="w-28 md:w-44 mx-auto" />
            </div>
            <button
              onClick={() => setSelectedImg(certificadoParker)}
              className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-[#FF5101] hover:bg-[#e54800] transition text-white text-md font-semibold"
            >
              {t('certificado.btnCertificado')}
            </button>
          </motion.div>

          {/* COLUNA 2 - Falch */}
          <motion.div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src={seloFalch} alt="Certificação Falch" className="w-28 md:w-44 mx-auto" />
            </div>
            <button
              onClick={() => setSelectedImg(certificadoFalch)}
              className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-[#FF5101] hover:bg-[#e54800] transition text-white text-md font-semibold"
            >
              {t('certificado.btnCertificado')}
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {/* Se selectedImg tiver um valor (verdadeiro), o modal abre */}
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedImg(null)} // Fecha ao clicar fora
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl p-2 md:p-4 max-w-xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedImg(null)} // Fecha no botão
                className="absolute top-[-40px] right-0 md:top-3 md:right-3 text-white md:text-gray-700 hover:text-black z-20"
              >
                <X size={30} />
              </button>

              <img
                src={selectedImg} // Aqui ele exibe a imagem que foi clicada
                alt="Certificado Ampliado"
                className="max-w-full max-h-[80vh] h-auto w-auto rounded-lg object-contain"
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