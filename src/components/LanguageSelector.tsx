import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import langSelector from "./languageSelector.module.css"

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [, setCurrentLanguage] = useState(i18n.language);
  
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

  // Recupera la lingua dal localStorage al caricamento dell'app
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
      <select id={langSelector.languageSelector} value={i18n.language} onChange={changeLang}>
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