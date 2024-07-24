import Notification from './Notification'
import ErrorMessage from './ErrorMessage'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { increaseVotes, createComment } from '../reducers/projectsReducer'

import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import Blog_blog from '../assets/1_Blog_blog.png'
import Blog_blogs from '../assets/1_Blog_blogs.png'
import Blog_login from '../assets/1_Blog_login.png'

import Master_paper_further from '../assets/2_Master_paper_further.png'
import Master_paper_home from '../assets/2_Master_paper_home.png'
import Master_paper_use_case from '../assets/2_Master_paper_use_case.png'

import Real_estate_add_property from '../assets/3_Real_estate_add_property.png'
import Real_estate_login from '../assets/3_Real_estate_login.png'
import Real_estate_overview from '../assets/3_Real_estate_overview.png'
import Real_estate_portfolio from '../assets/3_Real_estate_portfolio.png'

import Gym_add from '../assets/4_Gym_add.png'
import Gym_update from '../assets/4_Gym_update.png'
import Gym_search from '../assets/4_Gym_search.png'

import Christmas_sweet_home from '../assets/5_Christmas_sweet_home.png'
import Christmas_sweet_ingredientes from '../assets/5_Christmas_sweet_ingredientes.png'
import Christmas_sweet_mobile from '../assets/5_Christmas_sweet_mobile.png'
import Christmas_sweet_mobile_burger from '../assets/5_Christmas_sweet_mobile_burger.png'

import {
    Link
  } from 'react-router-dom'

import { useRef } from 'react';
import Navbar from './Nav_project/Navbar'
import ScrollToTop from './ScrollToTop'

const CommentButton = styled.button`
    color: #eee0b9;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 2px solid #A52A2A;
    border-radius: 10px;
    background-color: #A52A2A;
    cursor: pointer;
    &:focus {
        outline: none
`

const LikeButton = styled(CommentButton)`
  margin-left: 0.1em;
  font-size: 0.8em;
  padding: 0.25em 0.7em;
`

const Input = styled.input`
    padding: grey;
    border: 2px solid #A52A2A;
    border-radius: 3px;
    font-size: 15px;
    width: 30%;
    height: 25px;
    border-radius: 10px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 5px #BF4F74;
}`

const link_style = {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    textDecoration: "none",
  }

  const link_and_navbar_style = {
    backgroundColor: '#eee0b9',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 40,
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
  }


const Project = () => {

    const dispatch = useDispatch()

    const projects = useSelector(({ projects }) => {
        return projects
    })

    const id = useParams().id

    const project = projects.find(project => {
        return (
            project.ID === parseInt(id)
        )
    })

    const about_ref = useRef(null);
    const introduction_ref = useRef(null);
    const implementation_ref = useRef(null);
    const comments_ref = useRef(null);


    const [comment, setComment] = useState('')

    
    if (!project) { 
        return (
            <div className='sorry_no_project'>
                Sorry, the project with id {id} does not exist.
            </div>
        )
    }
    
    const handleLike = ( project ) => {
        
        const projectToUpdate = {
            title: project.title,
            introduction: project.introduction,
            about: project.about,
            implementation: project.implementation,
            tools_frontend: project.tools_frontend,
            tools_backend: project.tools_backend,
            url: project.url,
            likes: project.likes + 1,
            id: project.id,
            ID: project.ID
            }
        
        dispatch(increaseVotes(projectToUpdate))
    }

    const addComment = async (event) => {
        event.preventDefault()
        setComment('')
        const project_id = project.ID
        dispatch(createComment({ comment, project_id }))
    }

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    return (

        <div>
            
                <div style={link_and_navbar_style}>
                    <Link style={link_style} to="/projects">Projects</Link> <span className="chevron right"></span> <span>{project.title}</span>
                    
                    <Navbar about_ref={about_ref} introduction_ref={introduction_ref}
                    implementation_ref={implementation_ref} comments_ref={comments_ref} />
                </div>


                <h1 className='headline_1'>{project.title}</h1>
                    
                <p>Source code / video can be found: <a href={project.source} className='a_style' target="_blank" rel="noopener noreferrer">here</a>.</p>
                {project.url && <p className='line_height'>More information about the project can be found: <a href={project.url} className='a_style' target="_blank" rel="noopener noreferrer">here</a>.</p>}

                <h3 ref={about_ref}  className='project_h4_center'>About</h3>
                <p className='line_height'>{project.about}</p>

                <div className='project_foto_container'>
                    {project.ID == 5 && <img src={Christmas_sweet_home} className='project_foto' alt="Christmas_sweet_home"/> }
                    {project.ID == 1 && <img src={Blog_blogs} className='project_foto' alt="Blog_blogs"/> }
                    {project.ID == 2 && <img src={Master_paper_home} className='project_foto' alt="Master_paper_home"/> }
                    {project.ID == 3 && <img src={Real_estate_overview} className='project_foto' alt="Real_estate_overview"/> }
                    {project.ID == 4 && <img src={Gym_search} className='project_foto' alt="Gym_search"/> }
                </div>


                <h3 ref={introduction_ref} className='project_h4_center'>Introduction</h3>
                <p className='line_height'>{project.introduction}</p>

                <div className='project_foto_container'>
                    {project.ID == 5 && <img src={Christmas_sweet_ingredientes} className='project_foto' alt="Christmas_sweet_ingredientes"/> }
                    {project.ID == 1 && <img src={Blog_login} className='project_foto' alt="Blog_login"/> }
                    {project.ID == 2 && <img src={Master_paper_use_case} className='project_foto' alt="Master_paper_use_case"/> }
                    {project.ID == 3 && <img src={Real_estate_login} className='project_foto' alt="Real_estate_login"/> }
                    {project.ID == 3 && <img src={Real_estate_add_property} className='project_foto' alt="Real_estate_add_property"/> }
                    {project.ID == 4 && <img src={Gym_add} className='project_foto' alt="Gym_add"/> }

                    {project.ID == 1 && <img src={Blog_blog} className='project_foto' alt="Blog_blog"/> }
                    {project.ID == 2 && <img src={Master_paper_further} className='project_foto' alt="Master_paper_further"/> }
                    {project.ID == 3 && <img src={Real_estate_portfolio} className='project_foto' alt="Real_estate_portfolio"/> }
                    {project.ID == 4 && <img src={Gym_update} className='project_foto' alt="Gym_update"/> }
                </div>

                <div className='project_foto_container_mobile'>
                    {project.ID == 5 && <img src={Christmas_sweet_mobile} className='project_foto_mobile' alt="Christmas_sweet_mobile"/> }
                    <br/>
                    {project.ID == 5 && <img src={Christmas_sweet_mobile_burger} className='project_foto_mobile' alt="Christmas_sweet_mobile_burger"/> }
                </div>

                <h3 ref={implementation_ref} className='project_h4_center'>Implementation</h3>
                <p className='line_height'>{project.implementation}</p>

                <h3 className='project_h4_center'>Front-End</h3>
                <ul className="list_frontend_backend line_height">
                        {project.tools_frontend.map(tool => (
                            <li key={tool}>{tool}</li>
                        ))}
                </ul>

                <h3 className='project_h4_center'>Back-End</h3>
                <ul className="list_frontend_backend line_height">
                        {project.tools_backend.map(tool => (
                            <li key={tool}>{tool}</li>
                        ))}
                </ul>

                <hr className='hr_project' />

                <h2><b>{project.likes}</b>{' '}likes{' '}
                    <LikeButton onClick={() => handleLike(project)}>
                        like
                    </LikeButton>
                </h2>

                <Notification />
                <ErrorMessage />

                <h3 ref={comments_ref}>Comments / Suggestions:</h3>
                <form onSubmit={addComment}>
                        <Input
                            onChange={handleComment}
                            value={comment}
                            required={true}
                            type="text"
                            placeholder='type here'
                        /><CommentButton type="submit">add comment</CommentButton>
                    
                </form>
        
                
                {project.comments.map((comment) => {

                    if (project.comments.length !== 0 ) {
                        return (
                        
                            <div key={comment.id}>
                            <ul className='ul_no_bullets'>
                                <li className='li_content'><b>{comment.content}</b></li>
                                <i>Created: {comment.createdAt.slice(8,10)}. {comment.createdAt.slice(5,7)}. {comment.createdAt.slice(0,4)}</i>
                            </ul>
                            </div>
                        )
                    }



                })}

                <ScrollToTop />


        </div>
    )
}

export default Project