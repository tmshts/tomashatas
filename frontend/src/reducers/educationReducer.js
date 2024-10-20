import { createSlice } from '@reduxjs/toolkit'

import educationService from '../services/education'

import { setErrorMessage } from './errorMessageReducer'

const educationSlice = createSlice({
  name: 'education',
  initialState: [],
  reducers: {
    setEducation(state, action) {
      return action.payload
    }
  }
})

export const { setEducation } = educationSlice.actions

export const initializeEducation = () => {
  return async dispatch => {
    try {
      const education = await educationService.getAll()
      dispatch(setEducation(education))
    } catch (e) {
      dispatch(setErrorMessage('Education can not be loaded', 5))
    }
  }
}


export default educationSlice.reducer