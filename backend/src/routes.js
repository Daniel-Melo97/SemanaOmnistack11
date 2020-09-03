const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const deleteValidationIncident = require('./validation/incidents/deleteIncidentValidation');
const indexValidationIncident = require('./validation/incidents/IndexIncidentValidation');
const createIncidentValidation = require('./validation/incidents/createIncidentValidation');

const profileValidate = require('./validation/profile/profileValidation');

const createOngValidate = require('./validation/ongs/createOngValidation');

const sessionValidate = require('./validation/session/sessionValidation');

const routes = express.Router();

routes.post('/sessions', sessionValidate , SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', createOngValidate, OngController.create);

routes.get('/profile', profileValidate, ProfileController.index);

routes.get('/incidents', indexValidationIncident , IncidentsController.index);
routes.post('/incidents', createIncidentValidation ,IncidentsController.create);
routes.delete('/incidents/:id', deleteValidationIncident, IncidentsController.delete);



module.exports = routes;