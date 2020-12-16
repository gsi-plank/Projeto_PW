const server = require('../server.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const bodyParser = require('body-parser');

server.route('/occurrences')
    .get(controllerOccurrence.listOccurrence)

server.route('/occurrences/:id_occurrence')
    .get(controllerOccurrence.readOccurrence)
    .delete(controllerOccurrence.deleteOccurrence)

    server.route('/occurrences/:id_occurrence/arrival')
    .put(controllerOccurrence.updateOccurrenceArrival)

    server.route('/occurrences/:id_occurrence/cost')
    .put(controllerOccurrence.updateOccurrenceCost)    

// Operational Occurrence
server.route('/occurrences/:id_occurrence/operationals')
    .get(controllerOccurrence.listOpOccurrence) // certo

server.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(controllerOccurrence.readByOperationalOcur) // supostamente certo
    .put(controllerOccurrence.updateOperationalOccurrence) // outros updates como points departure etc..
    .delete(controllerOccurrence.deleteOperationalOccurrence)

// Witness Occurrence
server.route('/occurrences/:id_occurrence/witnesses')
    .get(controllerOccurrence.listWitOccurrence) // certo
    .post(controllerOccurrence.createWitOccur)

server.route('/occurrences/:id_occurrence/witnesses/:id_witness')
    .get(controllerOccurrence.readWitOccurrence) // supostamente certo
    .put(controllerOccurrence.updateWitOccur) // outros updates como points departure etc..
    .delete(controllerOccurrence.deleteWitOccur)

//material occurrence
server.route('/occurrences/:id_occurrence/materials')
    .get(controllerOccurrence.listMatOccurrence) // certo
    .post(controllerOccurrence.createMatOccur)

server.route('/occurrences/:id_occurrence/materials/:id_material')
    .get(controllerOccurrence.readMatOccurrence) // supostamente certo
    .put(controllerOccurrence.updateMatOccur) // outros updates como points departure etc..
    .delete(controllerOccurrence.deleteMatOccur)

//cost occurrence
server.route('/occurrences/:id_occurrence/cost')
    .get(controllerOccurrence.readCostOccurrence) // certo
    .post(controllerOccurrence.createCostOccur)
    .delete(controllerOccurrence.deleteCostOccur)

server.route('/occurrences/:id_occurrence/cost/duration')
    .put(controllerOccurrence.updateCostOccur)

//group evaluation
server.route('/occurrences/:id_occurrence/group_evaluation')
    .get(controllerOccurrence.listGEvaluation) // certo
    .post(controllerOccurrence.createGEvaluation)
    .delete(controllerOccurrence.deleteGEvaluation)
    .put(controllerOccurrence.updateGEvaluation)

//checklist
server.route('/occurrence/:id_occurrence/group_evaluation/checklist')
    .get(controllerOccurrence.readChecklist) // certo
    .post(controllerOccurrence.createChecklist)
    .delete(controllerOccurrence.deleteChecklist)
    .put(controllerOccurrence.updateGEvaluation)

//individual evaluation
server.route('/occurrences/:id_occurrence/individual_evaluation')
    .get(controllerOccurrence.listOpPointsOccur) // certo
    .post(controllerOccurrence.createIndEvaluation)

server.route('/occurrence/:id_occurrence/individual_evaluation/:id_operational')
    .delete(controllerOccurrence.deleteIndEvaluation)
    .put(controllerOccurrence.updateIndEvaluation)

module.exports = server;