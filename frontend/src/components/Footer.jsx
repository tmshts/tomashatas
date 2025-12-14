import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeProjects } from '../reducers/projectsReducer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const FooterWrapper = styled.div`
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


const Footer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeProjects()) 
    }, [])

    const projects = useSelector(({ projects }) => {
        return projects
    })

    return (
    
        <FooterWrapper>
                
            <Link style={padding_footer} to="/">Home</Link>
            <Link style={padding_footer} to="/cv">CV</Link>
            <Link style={padding_footer} to="/projects">Projects</Link>


            {[...projects]
            .sort((a,b) => a.ID - b.ID)
            .map(project =>
            <div key={project.ID} style={style_footer_projects}>

                    <Link style={style_footer_projects_links} to={`/projects/${project.ID}`}>
                            <b>
                                {project.title}
                            </b>
                    </Link>
                    
            </div>
            )}

            <br/>
            <em>© {new Date().getFullYear()} <a href="https://github.com/tmshts" className='a_style' target="_blank" rel="noopener noreferrer">tomashatas</a>. All rights reserved.</em>
            
        </FooterWrapper>

    )

}


export default Footer