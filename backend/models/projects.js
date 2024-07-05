const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    ID: Number,
    title: String,
    source: String,
    introduction: String,
    about: String,
    implementation: String,
    tools_frontend: [{
      type: String
    }],
    tools_backend: [{
      type: String
    }],
    url: String,
    likes: Number,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    },
    { timestamps: true } 
)

// create schema for counter projects
const counterProjectSchema = new mongoose.Schema({
    id: {
      type: String
    },
    sequence: {
      type: Number
    }
  })

// to format the objects returned by Mongoose is to modify the toJSON method of the schema
projectSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

// Create models based on schema
const Project = mongoose.model('Project', projectSchema)
const counterProject = mongoose.model('counterProject', counterProjectSchema);

// export models
module.exports = { Project, counterProject }