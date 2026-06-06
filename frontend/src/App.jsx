import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeProjects } from './reducers/projectsReducer'
import { initializeJobs } from './reducers/jobsReducer'
import { initializeEducation } from './reducers/educationReducer'

import './index.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Project from './components/Project'
import Cv from './components/Cv'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom'

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => { dispatch(initializeProjects()) }, [])
  useEffect(() => { dispatch(initializeJobs()) }, [])
  useEffect(() => { dispatch(initializeEducation()) }, [])

  const jobs = useSelector(({ jobs }) => jobs)
  const education = useSelector(({ education }) => education)
  const projects = useSelector(({ projects }) => projects)

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <header className="main-nav">
        <Link to="/" className="nav-logo">Tomas Hatas</Link>
        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
          <NavLink
            to="/cv"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            CV
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv jobs={jobs} education={education} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
