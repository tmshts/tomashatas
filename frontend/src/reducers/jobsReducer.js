import { createSlice } from '@reduxjs/toolkit'

import jobService from '../services/jobs'

import { setErrorMessage } from './errorMessageReducer'

const jobSlice = createSlice({
  name: 'jobs',
  initialState: [],
  reducers: {
    setJobs(state, action) {
      return action.payload
    }
  }
})

export const { setJobs } = jobSlice.actions

export const initializeJobs = () => {
  return async dispatch => {
    try {
      const jobs = await jobService.getAll()
      dispatch(setJobs(jobs))
    } catch (e) {
      dispatch(setErrorMessage('Jobs can not be loaded', 5))
    }
  }
}


export default jobSlice.reducer