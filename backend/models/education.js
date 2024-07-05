const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    ID: Number,
    name: String,
    city: String,
    country: String,
    grade: String,
    timeframe: String,
    courses: [{
      type: String
    }]
})

// create schema for counter projects
const counterEducationSchema = new mongoose.Schema({
    id: {
      type: String
    },
    sequence: {
      type: Number
    }
  })

// to format the objects returned by Mongoose is to modify the toJSON method of the schema
educationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

// Create models based on schema
const Education = mongoose.model('Education', educationSchema)
const counterEducation = mongoose.model('counterEducation', counterEducationSchema);

// export models
module.exports = { Education, counterEducation }