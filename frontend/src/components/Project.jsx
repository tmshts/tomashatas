import Notification from './Notification'
import ErrorMessage from './ErrorMessage'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { increaseVotes, createComment } from '../reducers/projectsReducer'
import { useParams, Link } from 'react-router-dom'
import { useRef } from 'react'

import Navbar from './Nav_project/Navbar'
import ScrollToTop from './ScrollToTop'

import GymProgg_main from '../assets/2_GymProgg_main.png'
import GymProgg_login from '../assets/2_GymProgg_login.png'
import GymProgg_exercises from '../assets/2_GymProgg_exercises.png'
import GymProgg_chart from '../assets/2_GymProgg_chart.png'
import GymProgg_add from '../assets/2_GymProgg_add.png'

import Speak_intro from '../assets/3_speak_intro.png'
import Speak_about from '../assets/3_speak_about.png'
import Speak_videos from '../assets/3_speak_videos.png'

import Real_estate_add_property from '../assets/1_Real_estate_add_property.png'
import Real_estate_login from '../assets/1_Real_estate_login.png'
import Real_estate_overview from '../assets/1_Real_estate_overview.png'
import Real_estate_overview_map from '../assets/1_Real_estate_overview_map.png'

import Blog_blog from '../assets/4_Blog_blog.png'
import Blog_blogs from '../assets/4_Blog_blogs.png'
import Blog_login from '../assets/4_Blog_login.png'

import Christmas_sweet_home from '../assets/5_Christmas_sweet_home.png'
import Christmas_sweet_ingredientes from '../assets/5_Christmas_sweet_ingredientes.png'
import Christmas_sweet_mobile from '../assets/5_Christmas_sweet_mobile.png'
import Christmas_sweet_mobile_burger from '../assets/5_Christmas_sweet_mobile_burger.png'

import Master_paper_further from '../assets/6_Master_paper_further.png'
import Master_paper_home from '../assets/6_Master_paper_home.png'
import Master_paper_use_case from '../assets/6_Master_paper_use_case.png'


const Project = () => {
  const dispatch = useDispatch()
  const projects = useSelector(({ projects }) => projects)
  const id = useParams().id

  const project = projects.find(p => p.ID === parseInt(id))

  const about_ref = useRef(null)
  const introduction_ref = useRef(null)
  const implementation_ref = useRef(null)
  const comments_ref = useRef(null)

  const [comment, setComment] = useState('')

  if (!project) {
    return (
      <div className="sorry-no-project">
        Sorry, the project with id {id} does not exist.
      </div>
    )
  }

  const handleLike = (project) => {
    dispatch(increaseVotes({
      title: project.title,
      introduction: project.introduction,
      about: project.about,
      implementation: project.implementation,
      tools_frontend: project.tools_frontend,
      tools_backend: project.tools_backend,
      url: project.url,
      likes: project.likes + 1,
      id: project.id,
      ID: project.ID,
    }))
  }

  const addComment = (event) => {
    event.preventDefault()
    setComment('')
    const project_id = project.ID
    dispatch(createComment({ comment, project_id }))
  }

  const isPrivate = [1, 2, 3].includes(project.ID)

  return (
    <div className="project-detail">

      {/* Breadcrumb + sub-nav */}
      <div className="breadcrumb">
        <Link to="/projects">Projects</Link>
        <span className="breadcrumb-sep">/</span>
        <span>{project.title}</span>
        <div className="project-inline-nav">
          <Navbar
            about_ref={about_ref}
            introduction_ref={introduction_ref}
            implementation_ref={implementation_ref}
            comments_ref={comments_ref}
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="project-detail-title">{project.title}</h1>

      <p className="project-detail-meta">
        Source code / video:{' '}
        {isPrivate ? (
          <em>private</em>
        ) : (
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            view here
          </a>
        )}
      </p>

      {project.url && (
        <p className="project-detail-meta">
          More information:{' '}
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            view here
          </a>
        </p>
      )}

      {/* About */}
      <h2 ref={about_ref} className="project-section-heading">About</h2>
      <p className="project-body-text">{project.about}</p>

      <div className="project-fotos-grid">
        {project.ID === 1 && <img src={Real_estate_overview} className="project-foto" alt="Real estate overview" />}
        {project.ID === 2 && <img src={GymProgg_main} className="project-foto" alt="GymProgg main" />}
        {project.ID === 3 && <img src={Speak_intro} className="project-foto" alt="Speak intro" />}
        {project.ID === 4 && <img src={Blog_blogs} className="project-foto" alt="Blog list" />}
        {project.ID === 5 && <img src={Christmas_sweet_home} className="project-foto" alt="Christmas sweet home" />}
        {project.ID === 6 && <img src={Master_paper_home} className="project-foto" alt="Master paper home" />}
      </div>

      {/* Introduction */}
      <h2 ref={introduction_ref} className="project-section-heading">Introduction</h2>
      <p className="project-body-text">{project.introduction}</p>

      <div className="project-fotos-grid">
        {project.ID === 1 && <img src={Real_estate_login} className="project-foto" alt="Real estate login" />}
        {project.ID === 1 && <img src={Real_estate_add_property} className="project-foto" alt="Real estate add property" />}
        {project.ID === 1 && <img src={Real_estate_overview_map} className="project-foto" alt="Real estate map" />}
        {project.ID === 2 && <img src={GymProgg_login} className="project-foto" alt="GymProgg login" />}
        {project.ID === 2 && <img src={GymProgg_exercises} className="project-foto" alt="GymProgg exercises" />}
        {project.ID === 3 && <img src={Speak_about} className="project-foto" alt="Speak about" />}
        {project.ID === 3 && <img src={Speak_videos} className="project-foto" alt="Speak videos" />}
        {project.ID === 4 && <img src={Blog_login} className="project-foto" alt="Blog login" />}
        {project.ID === 4 && <img src={Blog_blog} className="project-foto" alt="Blog post" />}
        {project.ID === 5 && <img src={Christmas_sweet_ingredientes} className="project-foto" alt="Christmas sweet ingredients" />}
        {project.ID === 6 && <img src={Master_paper_use_case} className="project-foto" alt="Master paper use case" />}
        {project.ID === 6 && <img src={Master_paper_further} className="project-foto" alt="Master paper further" />}
      </div>

      {/* Mobile screenshots */}
      {(project.ID === 1 || project.ID === 5) && (
        <div className="project-fotos-grid">
          {project.ID === 2 && <img src={GymProgg_chart} className="project-foto-mobile" alt="GymProgg chart" />}
          {project.ID === 2 && <img src={GymProgg_add} className="project-foto-mobile" alt="GymProgg add" />}
          {project.ID === 5 && <img src={Christmas_sweet_mobile} className="project-foto-mobile" alt="Christmas sweet mobile" />}
          {project.ID === 5 && <img src={Christmas_sweet_mobile_burger} className="project-foto-mobile" alt="Christmas sweet mobile menu" />}
        </div>
      )}

      {/* Implementation */}
      <h2 ref={implementation_ref} className="project-section-heading">Implementation</h2>
      <p className="project-body-text">{project.implementation}</p>

      {/* Tech stack */}
      <div className="tech-section">
        <p className="tech-section-label">Back-End</p>
        <div className="tech-tags">
          {project.tools_backend.map(tool => (
            <span key={tool} className="tech-tag">{tool}</span>
          ))}
        </div>
      </div>

      <div className="tech-section">
        <p className="tech-section-label">Front-End</p>
        <div className="tech-tags">
          {project.tools_frontend.map(tool => (
            <span key={tool} className="tech-tag">{tool}</span>
          ))}
        </div>
      </div>

      <hr className="project-hr" />

      {/* Likes */}
      <div className="likes-row">
        <span className="likes-count">{project.likes} likes</span>
        <button className="like-btn" onClick={() => handleLike(project)}>♡ Like</button>
      </div>

      <Notification />
      <ErrorMessage />

      {/* Comments */}
      <div className="comments-section" ref={comments_ref}>
        <h3>Comments &amp; Suggestions</h3>
        <form onSubmit={addComment} className="comment-form">
          <input
            className="comment-input"
            onChange={e => setComment(e.target.value)}
            value={comment}
            required
            type="text"
            placeholder="Leave a comment…"
          />
          <button className="comment-submit-btn" type="submit">Post</button>
        </form>

        {project.comments.map(comment => (
          <div key={comment.id} className="comment-item">
            <p className="comment-content">{comment.content}</p>
            <p className="comment-date">
              {comment.createdAt
                ? `${comment.createdAt.slice(8, 10)}. ${comment.createdAt.slice(5, 7)}. ${comment.createdAt.slice(0, 4)}`
                : ''}
            </p>
          </div>
        ))}
      </div>

      <ScrollToTop />
    </div>
  )
}

export default Project
