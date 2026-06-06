import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

import GymProgg_main from '../assets/2_GymProgg_main.png'
import Speak_intro from '../assets/3_speak_intro.png'
import Real_estate_overview from '../assets/1_Real_estate_overview.png'
import Blog_blogs from '../assets/4_Blog_blogs.png'
import Christmas_sweet_home from '../assets/5_Christmas_sweet_home.png'
import Master_paper_home from '../assets/6_Master_paper_home.png'


const projectImages = {
  1: Real_estate_overview,
  2: GymProgg_main,
  3: Speak_intro,
  4: Blog_blogs,
  5: Christmas_sweet_home,
  6: Master_paper_home,
}


const Projects = ({ projects }) => {
  return (
    <>
      <div className="projects-page">
        <h1 className="projects-page-title">Projects</h1>
        <p className="projects-page-subtitle">A selection of applications I have built.</p>

        <div className="projects-grid">
          {[...projects]
            .sort((a, b) => a.ID - b.ID)
            .map(project => (
              <Link
                key={project.ID}
                to={`/projects/${project.ID}`}
                className="project-card"
              >
                <img
                  src={projectImages[project.ID]}
                  alt={project.title}
                  className="project-card-img"
                />
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-intro">
                    {project.introduction
                      ? project.introduction.substring(0, 140) + (project.introduction.length > 140 ? '…' : '')
                      : project.about?.substring(0, 140)}
                  </p>
                  <span className="project-card-cta">View project →</span>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <ScrollToTop />
    </>
  )
}

export default Projects
