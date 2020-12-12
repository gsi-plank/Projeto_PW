const app = require('../app.js');
const controllerOperational = require('../controllers/operational.controller.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.route('/operationals')
    .get(controllerOperational.readOperationalPoints) // certo

app.route('/operationals/:id_operational')
    .get(controllerOperational.readIDOperational) //certo
    .put(controllerOperational.updateOperational) // certo no postman

app.route('/operationals/:id_operational/occurrences')
    .get(controllerOperational.readOccurrenceFromOperational) // certo

module.exports = app;