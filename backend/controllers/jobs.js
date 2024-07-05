const jobRouter = require('express').Router()
const { Job, counterJob } = require('../models/jobs');


jobRouter.get('/', async (request, response) => {
    const jobs = await Job.find({})

    response.json(jobs)
})


jobRouter.get('/:id', async (request, response, next) => {
    try {
        const job = await Job.find({ID: request.params.id})

        if (job.length === 0) {
            response
                .status(404)
                .json({ error: `Job with ${request.params.id} does not exist.` })

        } else {
            response
                .status(200)
                .json(job[0])
        }
    } catch (exception) {
        next(exception)
    }
})

jobRouter.post('/', async (request, response, next) => {
        const body = request.body

        try {
            let updatedID;
            updatedCounter = await counterJob.findOneAndUpdate(
                {id: "autoval"},
                {"$inc":{"sequence":1}},
                {new: true})
                
            if(updatedCounter == null) {
                const new_value = new counterJob({id: "autoval",sequence: 1})
                new_value.save();
                updatedID = 1;
            } else {
                updatedID = updatedCounter.sequence;
            }

            const job = new Job({
                ID: updatedID,
                company: body.company,
                city: body.city,
                country: body.country,
                position: body.position,
                timeframe: body.timeframe,
                tasks: body.tasks,
                aptitudes: body.aptitudes
            })

            const savedJob = await job.save()

            response
                .status(201)
                .json(savedJob)
        } catch (exception) {
            next(exception)
        }
    }
)

jobRouter.put('/:id', async (request, response, next) => {
    try {
        const updatedJob = request.body

        const jobFind = await Job.find({ID: request.params.id})
        if (jobFind.length === 0) {
            response
                .status(404)
                .json({ error: `Job with ${request.params.id} does not exist.` })
        }
        else {
            let generated_id = jobFind[0].id
    
            const returnedJob = await Job.findByIdAndUpdate(
                generated_id,
                updatedJob,
                { new: true }
            )
        
            response
                .status(200)
                .json(returnedJob)
        }
    }
    catch (exception) {
        next(exception)
    }
})

jobRouter.delete('/:id', async (request, response, next) => {

    try {
        const jobFind = await Job.find({ID: request.params.id})

        if (jobFind.length === 0) {
            response
                .status(404)
                .json({ error: `Job with ${request.params.id} does not exist.` })
        }
        else {
            let generated_id = jobFind[0].id

            await Job.findByIdAndDelete(generated_id)
      
            response
                .status(204)
                .end()
        }
    }
    catch (exception) {
        next(exception)
    }
})

module.exports = jobRouter