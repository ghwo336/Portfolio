import React from 'react';
import {useLanguage} from '../contexts/LanguageContext';
import './Section.css';
import './Projects.css';

const Projects: React.FC = () => {
  const {t} = useLanguage();

  const projects = [
    {
      name: t('projects.chef.name'),
      link: 'https://chef-token-dining.vercel.app/',
      type: t('projects.chef.type'),
      description: [
        t('projects.chef.desc1'),
        t('projects.chef.desc2'),
        t('projects.chef.desc3'),
        t('projects.chef.desc4'),
        t('projects.chef.desc5'),
        t('projects.chef.desc6'),
      ],
    },
    {
      name: t('projects.heist.name'),
      link: 'https://yt4307.mooo.com',
      type: t('projects.heist.type'),
      description: [
        t('projects.heist.desc1'),
        t('projects.heist.desc2'),
        t('projects.heist.desc3'),
        t('projects.heist.desc4'),
        t('projects.heist.desc5'),
      ],
    },
    {
      name: t('projects.pawnable.name'),
      link: 'https://pawnable.site',
      type: t('projects.pawnable.type'),
      description: [
        t('projects.pawnable.desc1'),
        t('projects.pawnable.desc2'),
        t('projects.pawnable.desc3'),
        t('projects.pawnable.desc4'),
        t('projects.pawnable.desc5'),
        t('projects.pawnable.desc6'),
      ],
    },
    {
      name: t('projects.rating.name'),
      link: 'https://rating.hiarc-official.com/',
      type: t('projects.rating.type'),
      description: [
        t('projects.rating.desc1'),
        t('projects.rating.desc2'),
        t('projects.rating.desc3'),
        t('projects.rating.desc4'),
        t('projects.rating.desc5'),
        t('projects.rating.desc6'),
      ],
    },
    {
      name: t('projects.hiarc.name'),
      link: 'https://hiarchomepage.web.app/',
      type: t('projects.hiarc.type'),
      description: [
        t('projects.hiarc.desc1'),
        t('projects.hiarc.desc2'),
        t('projects.hiarc.desc3'),
      ],
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>{t('projects.title')}</h2>
      {projects.map((project) => (
        <div key={project.name} className="project-card">
          <h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h3>
          <div className="project-type">{project.type}</div>
          <ul>
            {project.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
