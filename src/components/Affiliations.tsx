import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Affiliations: React.FC = () => {
  const { t } = useLanguage();

  const affiliations = [
    t('affiliations.1'),
    t('affiliations.2'),
    t('affiliations.3'),
  ];

  return (
    <section id="affiliations" className="section">
      <h2>{t('affiliations.title')}</h2>
      <ul>
        {affiliations.map((affiliation, index) => (
          <li key={index}>{affiliation}</li>
        ))}
      </ul>
    </section>
  );
};

export default Affiliations;
