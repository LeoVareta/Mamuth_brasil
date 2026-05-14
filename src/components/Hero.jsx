import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#0F0E68] text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Mamuth Mangueiras e Conexões
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Especialistas em mangueiras industriais, conexões e soluções
          hidráulicas para diversos segmentos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-10"
        >
          <button className="px-8 py-4 bg-[#FF5101] hover:bg-[#e54800] transition rounded-full font-semibold">
            Conheça nossos produtos
          </button>
        </motion.div>

      </div>
    </section>
  );
}