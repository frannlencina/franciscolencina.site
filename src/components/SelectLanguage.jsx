import React, { useState } from 'react';

const LanguageToggleButton = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const currentPath = Astro.url.pathname;
  const handleLanguageToggle = () => {
   
    if (selectedLanguage) {
      console.log("Inglés");
      window.location.href = '/en/';
    } else {
      console.log('Español');
      window.location.href = '/';
    }
    setSelectedLanguage(!selectedLanguage);
  };

  return (
    <div>
      <a className='bg-[#3450A2] dark:bg-[#3450A2] text-white dark:text-white px-4 py-2 cursor-pointer hover:ring-2 hover:ring-stone-300 dark:hover:ring-2 dark:hover:ring-white outline-none font-medium transition-all rounded-md'
       href={currentPath === '/' ? '/en/' : '/'}></a>
     
    </div>
  );
};

export default LanguageToggleButton;
