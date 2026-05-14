import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

import Br from '@/assets/icons/icone-brasil.png'
import En from '@/assets/icons/icone-estados-unidos.png'
import Es from '@/assets/icons/icone-espanha.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('menu_home', 'Home'), path: '/' },
    { name: t('paginas.sobre'), path: '/sobre' },
    { name: t('paginas.produtos'), path: '/produtos' },
    { name: t('paginas.noticias'), path: '/noticias' },
    { name: t('paginas.contato'), path: '/contato' },
  ];

  const flagButtonStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: '#1a1a1a', 
  };

  const activeStyle = {
    transform: 'scale(1.15)',
    boxShadow: '0 0 8px rgba(0,0,0,0.2)',
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  isActive(link.path) 
                    ? 'bg-white text-[#FE5100] font-bold' // Fundo branco, texto laranja e negrito
                    : 'text-gray-700 hover:bg-gray-100 font-medium'
                }`}
                // Removido o style dinâmico de background
              >
                {link.name}
              </Link>
            ))}

            {/* Seletor de Idiomas */}
            <div className="flex items-center ml-4 pl-4 space-x-3">
              <button 
                onClick={() => i18n.changeLanguage('pt')}
                style={{...flagButtonStyle, ...(i18n.language === 'pt' ? activeStyle : {})}}
                className="hover:scale-110"
              >
                <img src={Br} alt="Português" className="w-full h-full object-cover" />
              </button>

              <button 
                onClick={() => i18n.changeLanguage('en')}
                style={{...flagButtonStyle, ...(i18n.language.startsWith('en') ? activeStyle : {})}}
                className="hover:scale-110"
              >
                <img src={En} alt="English" className="w-full h-full object-cover" />
              </button>

              <button 
                onClick={() => i18n.changeLanguage('es')}
                style={{...flagButtonStyle, ...(i18n.language === 'es' ? activeStyle : {})}}
                className="hover:scale-110"
              >
                <img src={Es} alt="Español" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm transition-all ${
                    isActive(link.path) 
                      ? 'bg-white text-[#FE5100] font-bold' // Fundo branco, texto laranja e negrito no mobile
                      : 'text-gray-700 hover:bg-gray-100 font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Seletor Mobile */}
              <div className="flex items-center justify-center py-6 mt-2 border-t border-gray-100 space-x-8">
                <button onClick={() => { i18n.changeLanguage('pt'); setIsOpen(false); }} className="flex flex-col items-center gap-1">
                  <div style={{...flagButtonStyle, ...(i18n.language === 'pt' ? activeStyle : {})}}>
                    <img src={Br} className="w-full h-full object-cover" alt="PT" />
                  </div>
                  <span className="text-xs font-bold text-gray-500">PT</span>
                </button>

                <button onClick={() => { i18n.changeLanguage('en'); setIsOpen(false); }} className="flex flex-col items-center gap-1">
                  <div style={{...flagButtonStyle, ...(i18n.language.startsWith('en') ? activeStyle : {})}}>
                    <img src={En} className="w-full h-full object-cover" alt="EN" />
                  </div>
                  <span className="text-xs font-bold text-gray-500">EN</span>
                </button>

                <button onClick={() => { i18n.changeLanguage('es'); setIsOpen(false); }} className="flex flex-col items-center gap-1">
                  <div style={{...flagButtonStyle, ...(i18n.language === 'es' ? activeStyle : {})}}>
                    <img src={Es} className="w-full h-full object-cover" alt="ES" />
                  </div>
                  <span className="text-xs font-bold text-gray-500">ES</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;