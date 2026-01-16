import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'tech-stack', label: t('nav.techStack') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'affiliations', label: t('nav.affiliations') },
    { id: 'algorithms', label: t('nav.algorithms') },
    { id: 'awards', label: t('nav.awards') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a
          href="https://github.com/ghwo336"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-brand"
        >
          <img src="/myProfile.png" alt="Hojae Lee" className="navbar-profile" />
          Hojae Lee
        </a>

        <div className="navbar-right">
          <ul className="navbar-menu">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'ko' ? 'EN' : 'KO'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
