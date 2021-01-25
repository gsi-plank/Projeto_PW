const express = require('express');
const {login, logout} = require ('./controllers/login.controller');

//carregar bibliotecas globais
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');
require ('dotenv').config();

//iniciar a aplicação
var server = express();
server.use(express.static("../Frontend/"));
server.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
server.use(expressSanitizer());
server.use(expressValidator());
server.listen(3000, function(err) {
    if (!err) {
        console.log('Your app is listening on port 3000');
    }
    else { console.log(err); }
});

//login
server.post('/login', login)
server.get('/logout',logout)

//multer
const path = require ('path');  
const multer = require ('multer');  
server.use('/uploads', express.static(path.join(__dirname, '/upload')));  
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads'); 
    },  
    filename: (req, file, cb) => { 
        console.log(file); 
        let name = Date.now() + path.extname(file.originalname); 
        cb(null, name); 
        let nameUpload = ("" + name);  
        localStorage.setItem("localUploadedFileName", nameUpload); 
        //gravar a variável nameUpload, para depois enviar para a BD a rota da fota
    }
}); 

const fileFilter = (req, file, cb) => {  
    if (file.mimetype == 'image/jpeg' || file.mimetype == +image/png){  
        cb(null, true);
    } else{
        cb(null, false);
    }  
}

const upload = multer({  storage: storage, fileFilter: fileFilter }); 
server.post('/upload', upload.single('image'), (req, res, next) => {  
    res.sendFile('Upload.html', { root: '_______'});
}); 



//forçar utilização das bibliotecas
server.use(cors());
server.use(cookieParser());
module.exports = server;

require('./routes/occurrence.route');
require('./routes/user.route');
require('./routes/operational.route');