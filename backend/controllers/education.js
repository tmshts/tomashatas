const educationRouter = require('express').Router()
const { Education, counterEducation } = require('../models/education');


educationRouter.get('/', async (request, response) => {
    const educations = await Education.find({})

    response.json(educations)
})


educationRouter.get('/:id', async (request, response, next) => {
    try {
        const education = await Education.find({ID: request.params.id})

        if (education.length === 0) {
            response
                .status(404)
                .json({ error: `Education with ${request.params.id} does not exist.` })

        } else {
            response
                .status(200)
                .json(education[0])
        }
    } catch (exception) {
        next(exception)
    }
})

educationRouter.post('/', async (request, response, next) => {
        const body = request.body

        try {
            let updatedID;
            updatedCounter = await counterEducation.findOneAndUpdate(
                {id: "autoval"},
                {"$inc":{"sequence":1}},
                {new: true})
                
            if(updatedCounter == null) {
                const new_value = new counterEducation({id: "autoval",sequence: 1})
                new_value.save();
                updatedID = 1;
            } else {
                updatedID = updatedCounter.sequence;
            }

            const education = new Education({
                ID: updatedID,
                name: body.name,
                city: body.city,
                country: body.country,
                grade: body.grade,
                timeframe: body.timeframe,
                courses: body.courses
            })

            const savedEducation = await education.save()

            response
                .status(201)
                .json(savedEducation)
        } catch (exception) {
            next(exception)
        }
    }
)

educationRouter.put('/:id', async (request, response, next) => {
    try {
        const updatedEducation = request.body

        const educationFind = await Education.find({ID: request.params.id})
        if (educationFind.length === 0) {
            response
                .status(404)
                .json({ error: `Education with ${request.params.id} does not exist.` })
        }
        else {
            let generated_id = educationFind[0].id
    
            const returnedEducation = await Education.findByIdAndUpdate(
                generated_id,
                updatedEducation,
                { new: true }
            )
        
            response
                .status(200)
                .json(returnedEducation)
        }
    }
    catch (exception) {
        next(exception)
    }
})

educationRouter.delete('/:id', async (request, response, next) => {

    try {
        const educationFind = await Education.find({ID: request.params.id})

        if (educationFind.length === 0) {
            response
                .status(404)
                .json({ error: `Education with ${request.params.id} does not exist.` })
        }
        else {
            let generated_id = educationFind[0].id

            await Education.findByIdAndDelete(generated_id)
      
            response
                .status(204)
                .end()
        }
    }
    catch (exception) {
        next(exception)
    }
})

module.exports = educationRouter