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

const padding = {
  padding: 5,
  color: "white",
  fontSize: 20,
  textDecoration: "none",
  fontWeight: 'bold'
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
            
            <Footer />

        </Page>
    </Router>
  )

}

export default App
