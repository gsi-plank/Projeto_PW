const server = require('../server.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const bodyParser = require('body-parser');
server.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

server.route('/occurrences')
    .get(controllerOccurrence.list) // certo
    //.post(controllerOccurrence.update)

server.route('/occurrences/:id_occurrence')
    .get(controllerOccurrence.readIDOccurrence) // certo
    .put(controllerOccurrence.updateOccurrence) // provavelmente fazer outros updates para o departure, arrival, e status
    .delete(controllerOccurrence.deleteIDOccurrence)

// Operational Occurrence
server.route('/occurrences/:id_occurrence/operationals')
    .get(controllerOccurrence.readOperationalFromOccurrence) // certo
    .post(controllerOccurrence.saveOperationalOccurrence)

server.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(controllerOccurrence.readIDOperationalOccurrence) // supostamente certo
    .put(controllerOccurrence.updateOperationalOccurrence) // outros updates como points departure etc..
    .delete(controllerOccurrence.deleteIDOperationalOccurrence)

server.route('/occurrences/:id_occurrence/presences/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrencePresence)

server.route('/occurrences/:id_occurrence/arrivals/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrenceArrival)

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


module.exports = server;
