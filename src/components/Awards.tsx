import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Awards: React.FC = () => {
  const { t } = useLanguage();

  const awards = [
    t('awards.1'),
    t('awards.2'),
    t('awards.3'),
    t('awards.4'),
  ];

  return (
    <section id="awards" className="section">
      <h2>{t('awards.title')}</h2>
      <ul>
        {awards.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </section>
  );
};

export default Awards;
