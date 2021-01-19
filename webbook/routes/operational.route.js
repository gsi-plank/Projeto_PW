const server = require('../server.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const controllerOperational = require('../controllers/operational.controller')
const bodyParser = require('body-parser');

server.route('/operational/totalpoints')
    .get(controllerOccurrence.listOpPointsTotal)

server.route('/operational')
    .get(controllerOperational.listOperational)

server.route('/operational/:id_operational')
    .get(controllerOperational.readOperational)