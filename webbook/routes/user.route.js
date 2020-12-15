const server = require('../server.js');
const controllerUser = require('../controllers/user.controller');
const bodyParser = require('body-parser');

server.route('/users')
    .get(controllerUser.listAdmin) //funcional
    .get(controllerUser.listAudit) //não sabemos pq não conseguimos entrar na BD
    .post(controllerUser.createAudit) //não dá
    .post(controllerUser.createAdmin)

server.route('/users/:id_login')
    .get(controllerUser.readAdmin)
    .get(controllerUser.readAudit)
    .delete(controllerUser.deleteAdmin)
    .delete(controllerUser.deleteAudit)
    .put(controllerUser.updateAdmin)
    .put(controllerUser.updateAudit)