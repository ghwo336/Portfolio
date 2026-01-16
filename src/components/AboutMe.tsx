import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <h2>{t('about.title')}</h2>
      <ul>
        <li>{t('about.intro')}</li>
        <li>{t('about.student')}</li>
        <li>{t('about.animal')}</li>
        <li>{t('about.motto')}</li>
      </ul>
    </section>
  );
};

export default AboutMe;
