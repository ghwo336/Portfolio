import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Algorithms: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="algorithms" className="section">
      <h2>{t('algorithms.title')}</h2>
      <div className="algorithm-badge">
        <a href="https://solved.ac/ghwo336" target="_blank" rel="noopener noreferrer">
          <img
            src="http://mazassumnida.wtf/api/generate_badge?boj=ghwo336"
            alt="Solved.ac Profile"
          />
        </a>
      </div>
    </section>
  );
};

export default Algorithms;
