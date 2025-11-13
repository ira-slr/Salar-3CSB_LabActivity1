import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'PROJECT #1',
      description: 'A brief description of Project One.',
      link: 'https://github.com/user/project-one'
    },
    {
      title: 'PROJECT #2',
      description: 'A brief description of Project Two.',
      link: 'https://github.com/user/project-two'
    },
    {
      title: 'PROJECT #3',
      description: 'A brief description of Project Three.',
      link: 'https://github.com/user/project-three'
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;