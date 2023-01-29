const express = require('express');
const chemicalRoute = express.Router();
const chemicalsController = require('../controller/chemicals-controller');

chemicalRoute.get('/getByCategory/:category',chemicalsController.getChemicalByCategory);
chemicalRoute.get('/getByChemicalNameOrCasId/:value',chemicalsController.getChemicalByNameOrCasId);

module.exports = chemicalRoute;
