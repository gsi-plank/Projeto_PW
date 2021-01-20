const server = require('../server.js');
const controllerInd= require('../controllers/individual_evaluation.controller');
const controllerOperational = require('../controllers/operational.controller')
const bodyParser = require('body-parser');

server.route('/operational/totalpoints')
    .get(controllerInd.listOpPointsTotal)

server.route('/operational')
    .get(controllerOperational.listOperational)

server.route('/operational/:id_operational')
    .get(controllerOperational.readOperational)