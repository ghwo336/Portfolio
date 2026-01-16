import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <h2>{t('contact.title')}</h2>
      <p>
        📧 <a href="mailto:ghwo336@gmail.com">ghwo336@gmail.com</a>
      </p>
      <div className="blog-links">
        <a
          href="https://velog.io/@ghwo336/series"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Velog-20C997?style=flat&logo=Velog&logoColor=white"
            alt="Velog"
          />
        </a>
        <a
          href="https://ghwo336.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Tistory-000000?style=flat&logo=Tistory&logoColor=white"
            alt="Tistory"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
