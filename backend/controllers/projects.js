const projectRouter = require('express').Router()
const { Comment, counterComment } = require('../models/comments');
const { Project, counterProject } = require('../models/projects');


projectRouter.get('/', async (request, response) => {
    const projects = await Project.find({})
        .populate('comments', {})
    response.json(projects)
})

projectRouter.get('/comments', async (request, response, next) => {
    try {
        const comments = await Comment.find({})
        response.status(200).json(comments)
    } catch (exception) {
        next(exception)
    }
})

let get_view_project_1 = 0
let get_view_project_2 = 0
let get_view_project_3 = 0
let get_view_project_4 = 0
let get_view_project_5 = 0

projectRouter.get('/:id', async (request, response, next) => {
    
    switch(parseInt(request.params.id)) {
        case 1:
            get_view_project_1++;
            break;
        case 2:
            get_view_project_2++;
            break;
        case 3:
            get_view_project_3++;
            break;
        case 4:
            get_view_project_4++;
            break;
        case 5:
            get_view_project_5++;
            break;
    }

    console.log("1: " + get_view_project_1)
    console.log("2: " + get_view_project_2)
    console.log("3: " + get_view_project_3)
    console.log("4: " + get_view_project_4)
    console.log("5: " + get_view_project_5)

    try {
        const project = await Project.find({ID: request.params.id})
            .populate('comments', {
                content: 1,
                ID: 1,
                id: 1
        })

        if (project.length === 0) {
            response
                .status(404)
                .json({ error: `Project with ${request.params.id} does not exist.` })

        } else {
            response
                .status(200)
                .json(project[0])
        }
    } catch (exception) {
        next(exception)
    }
})

projectRouter.get('/:id/comments', async (request, response, next) => {
    try {
        const project_id = request.params.id
        const project = await Project.find({ ID: project_id })

        if (project.length === 0) {
            response
                .status(404)
                .json({ error: `Project with ${request.params.id} does not exist.` })
        }
        else {
            const comments = project[0].comments
        
            const all_comments = await Comment.find({ _id: comments })
        
            if (all_comments.length === 0) {
                response
                    .status(404)
                    .json({ error: 'No comments have been added yet.' })
            }
            else {
                response
                .status(200)
                .json(all_comments)
            }
        }

    } catch (exception) {
        next (exception)
    }
})

projectRouter.post('/', async (request, response, next) => {
        const body = request.body

        try {
            let updatedID;
            updatedCounter = await counterProject.findOneAndUpdate(
                {id: "autoval"},
                {"$inc":{"sequence":1}},
                {new: true})
                
            if(updatedCounter == null) {
                const new_value = new counterProject({id: "autoval",sequence: 1})
                new_value.save();
                updatedID = 1;
            } else {
                updatedID = updatedCounter.sequence;
            }

            const project = new Project({
                ID: updatedID,
                title: body.title,
                introduction: body.introduction,
                about: body.about,
                implementation: body.implementation,
                tools_frontend: body.tools_frontend,
                tools_backend: body.tools_backend,
                url: body.url,
                source: body.source,
                likes: body.likes
            })

            const savedProject = await project.save()

            response.status(201).json(savedProject)
        } catch (exception) {
            next(exception)
        }
    }
)

projectRouter.post('/:id/comments', async (request, response, next) => {
    const { content } = request.body

    if (!content) {
        return response
            .status(400)
            .json({ error: 'Comment can not be empty.' })
    }

    try {
        const project = await Project.find({ID: request.params.id})

        if (project.length === 0) {
            return response
                .status(400)
                .json({ error: `Project with ${request.params.id} does not exist.` })
        }

        let updatedID;
        updatedCounter = await counterComment.findOneAndUpdate(
            {id: "autoval"},
            {"$inc":{"sequence":1}},
            {new: true})
            
        if(updatedCounter == null) {
            const new_value = new counterComment({id: "autoval",sequence: 1})
            new_value.save();
            updatedID = 1;
        } else {
            updatedID = updatedCounter.sequence;
        }
    
        const comment = new Comment({
            ID: updatedID,
            content: content,
            project: project[0].id,
        })
        const savedComment = await comment.save()
        project[0].comments = project[0].comments.concat(savedComment._id)
        await project[0].save()
        response.status(201).json(savedComment)
        }
        
        catch (exception) {
            next(exception)
        }
})

projectRouter.put('/:id', async (request, response, next) => {
    try {
        const updatedProject = request.body

        const projectFind = await Project.find({ID: request.params.id})
        if (projectFind.length === 0) {
            response
                .status(404)
                .json({ error: `Project with ${request.params.id} does not exist.` })
        }
        else {
            let generated_id = projectFind[0].id
    
            const returnedProject= await Project.findByIdAndUpdate(
                generated_id,
                updatedProject,
                { new: true }
            )
        
            response
                .status(200)
                .json(returnedProject)
        }
    }
    catch (exception) {
        next(exception)
    }
})

projectRouter.delete('/:id', async (request, response, next) => {

    try {
        const projectFind = await Project.find({ID: request.params.id})

        if (projectFind.length === 0) {
            response
                .status(404)
                .json({ error: `Project with ${request.params.id} does not exist.` })
        }
        else {
            let generated_id = projectFind[0].id

            await Project.findByIdAndDelete(generated_id)
    
            const comments = await Comment.find({})
    
            for(let i = 0; i < comments.length; i++) {
    
                let particular_objectID = comments[i].project.valueOf()
    
                if(generated_id == particular_objectID) {
                    // delete particular comment containing the deleted project
                    await Comment.findByIdAndDelete(comments[i].id)
                }
            }
      
            response
                .status(204)
                .end()
        }
    }
    catch (exception) {
        next(exception)
    }
})

module.exports = projectRouter