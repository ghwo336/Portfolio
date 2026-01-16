import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Section.css';
import './TechStack.css';

const TechStack: React.FC = () => {
  const { t } = useLanguage();

  const techStacks = [
    { name: 'HTML5', color: 'E34F26', logo: 'HTML5' },
    { name: 'CSS3', color: '1572B6', logo: 'CSS3' },
    { name: 'Javascript', color: 'F7DF1E', logo: 'Javascript' },
    { name: 'TypeScript', color: '3178C6', logo: 'Typescript' },
    { name: 'Python', color: '3776AB', logo: 'Python' },
    { name: 'React', color: '61DAFB', logo: 'React' },
    { name: 'Next.js', color: '000000', logo: 'nextdotjs' },
    { name: 'Express.js', color: '404D59', logo: 'express' },
    { name: 'Vercel', color: '000000', logo: 'Vercel' },
  ];

  return (
    <section id="tech-stack" className="section">
      <h2>{t('tech.title')}</h2>
      <div className="tech-badges">
        {techStacks.map((tech) => (
          <img
            key={tech.name}
            src={`https://img.shields.io/badge/${tech.name}-${tech.color}?style=flat&logo=${tech.logo}&logoColor=white`}
            alt={tech.name}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
