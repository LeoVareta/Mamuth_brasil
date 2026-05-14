import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';
import { CONTACT_INFO } from '@/constants/contactInfo';

const Footer = () => {
  const {t} = useTranslation(); 
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: t('paginas.sobre'), path: '/sobre' },
    { name: t('paginas.produtos'), path: '/produtos' },
    { name: t('paginas.noticias'), path: '/noticias' },
    { name: t('paginas.contato'), path: '/contato' },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#14124F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300">
              <Logo size="md" className="brightness-0 invert"/>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.textFooter')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.titleLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.titleContato')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT_INFO.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.email.link}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{CONTACT_INFO.email.address}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>{t('contato.matriz')}</strong> {t('footer.endereco')}</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>{t('contato.filial')}</strong> {t('footer.endereco2')}</span>
              </li>    
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.titleRedes')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mamuthmangueirasoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mamuthmangueirasoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://br.linkedin.com/company/mamuthmangueirasoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Mamuth_HydroOficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@mamuth.hidrojato"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {t('footer.textDireitos')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;