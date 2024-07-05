const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    ID: Number,
    content: String,
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    },
    { timestamps: true } 
)

// create schema for counter comments
const counterCommentSchema = new mongoose.Schema({
    id: {
      type: String
    },
    sequence: {
      type: Number
    }
  })

// to format the objects returned by Mongoose is to modify the toJSON method of the schema
commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

// Create models based on schema
const Comment = mongoose.model('Comment', commentSchema)
const counterComment = mongoose.model('counterComment', counterCommentSchema);

// export models
module.exports = { Comment, counterComment }