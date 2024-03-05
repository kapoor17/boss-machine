const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../../db');
const ideasRouter = express.Router();

ideasRouter.param('ideaId', (req, res, next, ideaId) => {
    const ideaExist = getFromDatabaseById('ideas', ideaId);
    if(ideaId){
        req.idea = ideaExist
        next();
    }else{
        res.status(404).json({
            error: 'Idea does not exist'
        })
    }
})

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
})

ideasRouter.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea)
})

ideasRouter.put('/:ideaId', (req, res, next) => {
    let updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const ideaDeleted = deleteFromDatabasebyId('ideas', req.idea.id);
    if(ideaDeleted) res.status(204)
    else res.status(500)
    res.send();
})

module.exports = ideasRouter;