const server = require('../server.js');
const controllerUser = require('../controllers/user.controller');
const controllerMode = require('../controllers/darkmode.controller');
const bodyParser = require('body-parser');
 
server.route('/users')
    .get(controllerUser.allUsers)

server.route('/users/:id_login')
    .put(controllerUser.updateUser)
    .get(controllerMode.readMode)
    .delete(controllerMode.deleteMode)

server.route('/users/password/:email')
    .get(controllerUser.selectLogin)

server.route('/users/:id_login/email')
    .get(controllerUser.readEmail)
    
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

server.route('/mode')
    .post(controllerMode.addMode)    

server.route('/users/:id_login/dark')
    .put(controllerMode.updateDark)

server.route('/users/:id_login/light')
    .put(controllerMode.updateLight)

module.exports = server;