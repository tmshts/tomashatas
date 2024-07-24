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
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import styled from 'styled-components'


const Page = styled.div`
  padding: 1em;
`

const Navigation = styled.div`
  background: #A52A2A;
  padding: 1em;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`

const Footer = styled.div`
  background: #ADADAD;
  padding: 1em;
  margin-top: 1em;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  text-decoration: none;

`

const padding = {
  padding: 5,
  color: "white",
  fontSize: 20,
  textDecoration: "none",
  fontWeight: 'bold'
}

const padding_footer = {
  padding: 5,
  color: "black",
  textDecoration: "none",
  fontWeight: 'bold'
}

const style_footer_projects = {
  paddingTop: 8,
  paddingLeft: 30,
}

const style_footer_projects_links = {
  color: "black",
  textDecoration: "none",
}


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeProjects()) 
  }, [])

  useEffect(() => {
    dispatch(initializeJobs()) 
  }, [])

  useEffect(() => {
    dispatch(initializeEducation()) 
  }, [])

  const jobs = useSelector(({ jobs }) => {
    return jobs
  })

  const education = useSelector(({ education }) => {
    return education
  })

  const projects = useSelector(({ projects }) => {
    return projects
  })

  return (
    <Router>
        <Page>
            <Navigation>
                <Link style={padding} to="/">Home</Link>
                <Link style={padding} to="/cv">CV</Link>
                <Link style={padding} to="/projects">Projects</Link>
            </Navigation>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<Cv jobs={jobs} education={education} /> } />
                <Route path="/projects" element={<Projects projects={projects} />} />
                <Route path="/projects/:id" element={<Project />} />
            </Routes>
            
            <Footer>
                <Link style={padding_footer} to="/">Home</Link>
                <Link style={padding_footer} to="/cv">CV</Link>
                <Link style={padding_footer} to="/projects">Projects</Link>


                {projects.map(project =>
                <div key={project.ID} style={style_footer_projects}>

                        <Link style={style_footer_projects_links} to={`/projects/${project.ID}`}>
                              <b>
                                  {project.title}
                              </b>
                        </Link>
                        
                </div>
                )}

                <br/>
                <em>© 2024 <a href="https://github.com/tmshts" className='a_style' target="_blank" rel="noopener noreferrer">tmshts</a>. All rights reserved.</em>
            </Footer>
        </Page>
    </Router>
)

}

export default App
