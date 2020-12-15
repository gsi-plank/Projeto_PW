const server = require('../server.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const bodyParser = require('body-parser');

server.route('/occurrences')
    .get(controllerOccurrence.listOccurrence)

server.route('/occurrences/:id_occurrence')
    .get(controllerOccurrence.readOccurrence)
    .put(controllerOccurrence.updateOccurrence)
    .delete(controllerOccurrence.deleteOccurrence)

// Operational Occurrence
server.route('/occurrences/:id_occurrence/operationals')
    .get(controllerOccurrence.readByOccurrence) // certo

server.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(controllerOccurrence.readByOperationalOcur) // supostamente certo
    .put(controllerOccurrence.updateOperationalOccurrence) // outros updates como points departure etc..
    .delete(controllerOccurrence.deleteOperationalOccurrence)
/*

server.route('/occurrences/:id_occurrence/operationals/departures/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrenceDeparture)

server.route('/occurrences/:id_occurrence/evaluations/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrencePoints)

// Witness Ocurrence
server.route('/occurrences/:id_occurrence/witnesses')
    .get(controllerOccurrence.readWitnessOccurrence) // preciso dados para testar
    .post(controllerOccurrence.saveWitnessOccurrence)

server.route('/occurrences/:id_occurrence/witnesses/:id_witness')
    .get(controllerOccurrence.readIDWitnessOccurrence) // preciso dados para testar
    .put(controllerOccurrence.updateWitnessOccurrence)
    .delete(controllerOccurrence.deleteIDWitnessOccurrence)

// Vehicle material occurrence
server.route('occurrences/:id_occurrence/materials') // continuar esta
    .get(controllerOccurrence.readVehicleMaterialFromOccurrence)
    .post(controllerOccurrence.saveVehicleMaterialOccurrence)
*/

module.exports = server;