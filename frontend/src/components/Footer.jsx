import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeProjects } from '../reducers/projectsReducer'
import { Link } from 'react-router-dom'


const Footer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeProjects())
  }, [])

  const projects = useSelector(({ projects }) => projects)

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-brand-name">Tomas Hatas</p>
          <span className="footer-brand-tagline">
            AI Strategy Advisor | GenAI &amp; Agentic AI Professional.
          </span>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Navigation</span>
          <Link to="/">Home</Link>
          <Link to="/cv">CV</Link>
          <Link to="/projects">Projects</Link>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Projects</span>
          {[...projects]
            .sort((a, b) => a.ID - b.ID)
            .map(project => (
              <Link key={project.ID} to={`/projects/${project.ID}`}>
                {project.title}
              </Link>
            ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tomas Hatas. All rights reserved.</span>
        <a
          href="https://github.com/tmshts"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
