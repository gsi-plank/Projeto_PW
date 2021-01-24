const express = require('express');

//carregar bibliotecas globais
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');
const multer = require('multer');

//iniciar a aplicação
var server = express();
server.use(express.static("../Frontend/"));
server.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
server.use(expressSanitizer());
server.use(expressValidator());
let port = process.env.PORT || 8080 ;
server.listen(port, function(err) {
    if (!err) {
        console.log('Your app is listening on port ' +port);
    }
    else { console.log(err); }
});





//Multer
const app = express()
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        let name = Date.now() + path.extname(file.originalname);
        cb(null, name);
        let nameUpload = "../Backend/webbook/uploads/" + name;
        localStorage.setItem("localUploadedFileName", nameUpload);
    }
    /*filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname);
    }*/
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });
app.post('/upload', upload.single('image'), (req, res, next) => {
    res.sendFile('Upload.html', { root: '../../Frontend' });
    /*try {
        return res.status(201).json({
            message: 'File uploded successfully'
        });
    }
    catch (error) {
        console.error(error);
    }*/
});



//forçar utilização das bibliotecas
server.use(cors());
server.use(cookieParser());
module.exports = server;

require('./routes/occurrence.route');
require('./routes/user.route');
require('./routes/operational.route')


