const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    ID: Number,
    company: String,
    city: String,
    country: String,
    position: String,
    timeframe: String,
    tasks: [{
      type: String
    }],
    aptitudes: String,
    }
)

// create schema for counter projects
const counterJobSchema = new mongoose.Schema({
    id: {
      type: String
    },
    sequence: {
      type: Number
    }
  })

// to format the objects returned by Mongoose is to modify the toJSON method of the schema
jobSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

// Create models based on schema
const Job = mongoose.model('Job', jobSchema)
const counterJob = mongoose.model('counterJob', counterJobSchema);

// export models
module.exports = { Job, counterJob }