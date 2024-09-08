import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import langSelector from "./languageSelector.module.css"

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  
  // Usa useState per mantenere il valore corrente della lingua
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  
  // Elenco delle lingue supportate
  const languages = [ 
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' }
  ];

  // Funzione per cambiare la lingua
  const changeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setCurrentLanguage(selectedLanguage);
    // Salva la lingua selezionata nel localStorage
    localStorage.setItem('language', selectedLanguage);
    event.target.blur();
  };

  return (
      <select id={langSelector.languageSelector} value={currentLanguage} onChange={changeLang}>
        {/* Mostra tutte le lingue */}
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.label} {/* Mostra la label della lingua */}
          </option>
        ))}
      </select>
  );
};

export default LanguageSelector;
