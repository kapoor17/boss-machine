const express = require('express');
const { getFromDatabaseById, getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('../../db');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
})

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send()
})

module.exports = meetingsRouter;