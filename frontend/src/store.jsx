import { configureStore } from '@reduxjs/toolkit'

import notificationReducer from './reducers/notificationReducer'
import jobsReducer from './reducers/jobsReducer'
import educationReducer from './reducers/educationReducer'
import projectsReducer from './reducers/projectsReducer'
import errorMessageReducer from './reducers/errorMessageReducer'

const store = configureStore({
    reducer: {
      projects: projectsReducer,
      jobs: jobsReducer,
      education: educationReducer,
      notification: notificationReducer,
      errorMessage: errorMessageReducer
    }
  })

//console.log(store.getState())

export default store