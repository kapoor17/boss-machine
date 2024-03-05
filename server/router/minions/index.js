const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../../db');
const minionsRouter = express.Router();

minionsRouter.param('minionId', (req, res, next, minionId) => {
    const minionExist = getFromDatabaseById('minions', minionId);
    if(minionExist){
        req.minion = minionExist;
        next();
    }else{
        res.status(404).json({
            error: 'Minion does not exist'
        })
    }
})

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
})

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
})

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion)
})

minionsRouter.put('/:minionId', (req, res, next) => {
    let updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion);
})

minionsRouter.delete('/:minionId', (req, res, next) => {
    const minionDeleted = deleteFromDatabasebyId('minions', req.minion.id);
    if(minionDeleted) res.status(204)
    else res.status(500)
    res.send();
})

module.exports = minionsRouter;