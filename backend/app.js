//console.log('hello world')
require('dotenv').config()
const logger = require('./utils/logger')
const config = require('./utils/config')

const projectsRouter = require('./controllers/projects')
const jobsRouter = require('./controllers/jobs')
const educationRouter = require('./controllers/education')

const middleware = require('./utils/middleware')

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())

const mongoose = require('mongoose')

const mongoUrl = config.MONGODB_URI
logger.info('connecting to', mongoUrl)

app.use('/api/projects', projectsRouter)
app.use('/api/jobs', jobsRouter)
app.use('/api/education', educationRouter)
app.use(cors())

app.use(middleware.errorHandler)

mongoose.connect(mongoUrl)

module.exports = app
