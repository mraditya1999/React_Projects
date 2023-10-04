import { useFetchProjects } from './fetchProjects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className='projects'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>

      <div className='projects-center'>
        {projects.map((project) => {
          const { id, img, url, code, title } = project;
          return (
            <div key={id} className='project'>
              <img src={img} alt={title} className='img' />
              <footer className='project-footer'>
                <a href={code} target='_blank' rel='noreferrer'>
                  <FaGithub className='icon' />
                </a>
                <h5>{title}</h5>
                <a href={url} target='_blank' rel='noreferrer'>
                  <FaExternalLinkAlt className='icon' />
                </a>
              </footer>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
