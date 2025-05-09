import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  onSelect: () => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onSelect();
  };

  return (
    <div className="space-y-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${
            i18n.language === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
          }`}
          onClick={() => changeLanguage(lang.code)}
        >
          <span className="mr-2">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
};