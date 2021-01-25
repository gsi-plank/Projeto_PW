const server = require('../server.js');
const controllerUser = require('../controllers/user.controller');
const controllerMode = require('../controllers/darkmode.controller');
const controllerImage = require('../controllers/images.controller');
const {verify} = require('../controllers/middleware');
const {login, logout} = require('../controllers/login.controller');
const bodyParser = require('body-parser');
 
server.route('/users')
    .get(verify, controllerUser.allUsers)

server.route('/users/:id')
    .put(verify, controllerUser.updateUser)
    .get(verify, controllerMode.readMode)
    .delete(verify, controllerMode.deleteMode)

server.route('/users/password/:email')
    .get(verify, controllerUser.selectLogin)
    
server.route('/users/login')
    .post(login)

server.route('/users/logout')
    .get(logout)    

server.route('/users/:id/email')
    .get(verify, controllerUser.readEmail)

server.route('/users/:id/profile')
    .get(verify, controllerUser.readProfile)
    
server.route('/admins')
    .get(verify, controllerUser.listAdmin)
    .post(verify, controllerUser.createAdmin)

server.route('/admins/:id')
    .get(verify, controllerUser.readAdmin)
    .delete(verify, controllerUser.deleteAdmin)
    .put(verify, controllerUser.updateAdmin)
    
server.route('/audits')
    .get(verify, controllerUser.listAudit)
    .post(verify, controllerUser.createAudit)

server.route('/audits/:id')
    .get(verify, controllerUser.readAudit)
    .put(verify, controllerUser.updateAudit) 
    .delete(verify, controllerUser.deleteAudit)

server.route('/mode')
    .post(verify, controllerMode.addMode)    

server.route('/users/:id/dark')
    .put(verify, controllerMode.updateDark)

server.route('/users/:id/light')
    .put(verify, controllerMode.updateLight)

server.route('/users/:id/light')
    .put(verify, controllerMode.updateLight)

module.exports = server;