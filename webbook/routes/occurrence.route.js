const server = require('../server.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const bodyParser = require('body-parser');

server.route('/occurrences')
    .get(controllerOccurrence.list)
    
    
/**
app.route('/occurrences/:id_occurrence')
    .get(controllerOccurrence.readIDOccurrence) // certo
    .put(controllerOccurrence.updateOccurrence) // provavelmente fazer outros updates para o departure, arrival, e status
    .delete(controllerOccurrence.deleteIDOccurrence)

// Operational Occurrence
app.route('/occurrences/:id_occurrence/operationals')
    .get(controllerOccurrence.readOperationalFromOccurrence) // certo
    .post(controllerOccurrence.saveOperationalOccurrence)

app.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(controllerOccurrence.readIDOperationalOccurrence) // supostamente certo
    .put(controllerOccurrence.updateOperationalOccurrence) // outros updates como points departure etc..
    .delete(controllerOccurrence.deleteIDOperationalOccurrence)

app.route('/occurrences/:id_occurrence/presences/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrencePresence)

app.route('/occurrences/:id_occurrence/arrivals/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrenceArrival)

app.route('/occurrences/:id_occurrence/operationals/departures/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrenceDeparture)

app.route('/occurrences/:id_occurrence/evaluations/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrencePoints)

// Witness Ocurrence
app.route('/occurrences/:id_occurrence/witnesses')
    .get(controllerOccurrence.readWitnessOccurrence) // preciso dados para testar
    .post(controllerOccurrence.saveWitnessOccurrence)

app.route('/occurrences/:id_occurrence/witnesses/:id_witness')
    .get(controllerOccurrence.readIDWitnessOccurrence) // preciso dados para testar
    .put(controllerOccurrence.updateWitnessOccurrence)
    .delete(controllerOccurrence.deleteIDWitnessOccurrence)

// Vehicle material occurrence
app.route('occurrences/:id_occurrence/materials') // continuar esta
    .get(controllerOccurrence.readVehicleMaterialFromOccurrence)
    .post(controllerOccurrence.saveVehicleMaterialOccurrence)
*/

module.exports = server;