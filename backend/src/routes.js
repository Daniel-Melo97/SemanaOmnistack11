const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const deleteValidationIncident = require('./validation/incidents/DeleteIncidentValidation');
const indexValidationIncident = require('./validation/incidents/IndexValidationIncidents');

const profileValidate = require('./validation/profile/profileValidation');

const createOngValidate = require('./validation/ongs/createOngValidation');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', createOngValidate, OngController.create);

routes.get('/profile', profileValidate, ProfileController.index);

routes.get('/incidents', indexValidationIncident , IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', deleteValidationIncident, IncidentsController.delete);



module.exports = routes;