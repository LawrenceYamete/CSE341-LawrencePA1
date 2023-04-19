// Create routes
const routes = require('express').Router();

//Listed all the routes 
const myController = require('../controllers');

// Listed the function inside of the controller
routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnAnotherPerson);

module.exports = routes;