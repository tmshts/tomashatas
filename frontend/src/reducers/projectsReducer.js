import { createSlice, current } from '@reduxjs/toolkit'

import projectService from '../services/projects'

import { setNotification } from './notificationReducer'
import { setErrorMessage } from './errorMessageReducer'

const projectSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const updatedProject = action.payload
      console.log(updatedProject)
      return state.map(project =>
        project.id !== updatedProject.id ? project : updatedProject
      )
    },
    updateProjectsAfterComment(state, action) {
      const comment = action.payload

      const project_id = comment.project
      const project = [ ...current(state).filter(project => project.id === project_id)]
      const the_project = project[0]

      const updated_comment = {
        ...comment,
        content: comment.content,
        id: comment.id,
      }

      const updated_comments = the_project.comments.concat(updated_comment)

      const updated_project = {
        ...the_project,
        comments: updated_comments,
      }

      return [ ...state.map(project => {
        return (
          project.id !== updated_project.id ? project : updated_project
        )
      })]
    },
    setProjects(state, action) {
      return action.payload
    }
  }
})

export const { addVote, updateProjectsAfterComment, setProjects } = projectSlice.actions

export const initializeProjects = () => {
  return async dispatch => {
    try {
      const projects = await projectService.getAll()
      dispatch(setProjects(projects))
    } catch (e) {
      dispatch(setErrorMessage('Projects can not be loaded', 5))
    }
  }
}

export const createComment = (content) => {
  const { comment, project_id } = content
  return async dispatch => {
    try {
      const returnedComment = await projectService.addComment(content, project_id)
      dispatch(updateProjectsAfterComment(returnedComment))
      dispatch(setNotification(`You have just added the comment '${comment}'. Thank you.`, 5))
    } catch (exception) {
      dispatch(setErrorMessage(`Comment '${comment}' can not be added`, 5))
    }
  }
}

export const increaseVotes = (project) => {
  return async dispatch => {
    try {
      const updatedProject = await projectService.updateVotes(project)
      const comments = await projectService.getAllComments(updatedProject.ID)
      if(comments.error_message === 'no comments') {
        console.log('hey')
        dispatch(addVote({
          ...updatedProject,
        }))
      }
      else {
        dispatch(addVote({
          ...updatedProject,
          comments: comments
        }))
      }
      // eslint-disable-next-line @stylistic/js/quotes
      dispatch(setNotification(`You have just liked this project. Thank you.`, 5))
    } catch (e) {
      dispatch(setErrorMessage(`A vote for project '${project.title}' can not be made`, 5))
    }
  }
}

export default projectSlice.reducer