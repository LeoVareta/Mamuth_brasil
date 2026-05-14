import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const NewsCard = ({ id, image, date, title, excerpt, buttonText, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm mb-3" style={{ color: 'var(--color-gray)' }}>
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-dark-blue)' }}>
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <Link
          to={link}
          className="font-semibold hover:underline inline-flex items-center"
          style={{ color: '#FF5101' }}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;