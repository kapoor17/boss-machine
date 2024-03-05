const express = require('express');
const { getFromDatabaseById, getAllFromDatabase, addToDatabase, deleteAllFromDatabase } = require('../../db');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
})

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', req.body);
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send()
})

module.exports = meetingsRouter;