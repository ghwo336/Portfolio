import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <header className="header">
      <a
        href="https://github.com/ghwo336"
        target="_blank"
        rel="noopener noreferrer"
        className="header-link"
      >
        <div className="header-content">
          <img src="/myProfile.png" alt="Hojae Lee" className="profile-image" />
          <h1>{language === 'ko' ? '이호재' : 'Hojae Lee'}</h1>
        </div>
      </a>
      <p className="subtitle">{t('header.subtitle')}</p>
    </header>
  );
};

export default Header;
