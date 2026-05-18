import React from 'react';
import imgLogo from "@/assets/icons/logo-mamuth-h.svg";
const LogoH = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-10',      // 40px
    md: 'h-[65px]',  // 65px
    lg: 'h-[100px]', // 100px
  };

  return (
    <img
      src={imgLogo}
      alt="Mamuth"
      className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain transition-all duration-300 drop-shadow-md ${className}`}
    />
  );
};

export default LogoH;