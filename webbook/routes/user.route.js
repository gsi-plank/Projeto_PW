const server = require('../server.js');
const controllerUser = require('../controllers/user.controller');
const bodyParser = require('body-parser');
 
server.route('/users')
    .get(controllerUser.allUsers)

server.route('/users/:id_login')
    .put(controllerUser.updateUser)

server.route('/users/:email')
    .get(controllerUser.selectLogin)
    
server.route('/admins')
    .get(controllerUser.listAdmin)
    .post(controllerUser.createAdmin)

server.route('/admins/:id_login')
    .get(controllerUser.readAdmin)
    .delete(controllerUser.deleteAdmin)
    .put(controllerUser.updateAdmin)
    
server.route('/audits')
    .get(controllerUser.listAudit)
    .post(controllerUser.createAudit)

server.route('/audits/:id_login')
    .get(controllerUser.readAudit)
    .put(controllerUser.updateAudit) 
    .delete(controllerUser.deleteAudit)