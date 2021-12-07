const express = require ('express');
const AppRouter = express.Router();
const {AppController} = require('../controllers/appController');

AppRouter
    .get ('/', AppController.getIndex);

AppRouter
    .get ('/:name', AppController.display);

AppRouter
    .get ('/new/:name', AppController.add);

AppRouter
    .get ('/remove/:name', AppController.delete);

module.exports={AppRouter};