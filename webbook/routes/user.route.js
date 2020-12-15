const server = require('../server.js');
const controllerUser = require('../controllers/user.controller');
const bodyParser = require('body-parser');

server.route('/users')
    .get(controllerUser.listAdmin)
    .get(controllerUser.listAudit)//não sabemos pq não conseguimos entrar na BD
    
server.route('/users/admins')
    .get(controllerUser.listAdmin)
    .post(controllerUser.createAdmin)

server.route('/users/admins/:id_login')
    .delete(controllerUser.deleteAdmin)
    .put(controllerUser.updateAdmin)
    
server.route('/users/audits')
    .get(controllerUser.listAudit)
    .post(controllerUser.createAudit)

server.route('/users/audits/:id_auditor')
    .put(controllerUser.updateAudit) 
    .delete(controllerUser.deleteAudit)