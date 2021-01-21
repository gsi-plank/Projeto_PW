const { con } = require('../assets/bd');
const connect = require ('../assets/bd');

//login
function login (req, res) {
    const email = req.sanitize('email').escape();
    let query = "";
    query = connect.con.query('SELECT email, password FROM login where email=?', email, function (err, rows, fields){
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            res.status(400).send({
                "msg": err.code
            });
        console.log('Error while performing Query.', err);
    }) ; 
}

//admins
function addAdmin(req, res) {
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const profile = "Administrador";
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const nationality = req.sanitize('nationality').escape();
    const cc = req.sanitize('cc').escape();
    const date_birth = req.sanitize('date_birth').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const address = req.sanitize('address').escape();
    const education = req.sanitize('education').escape();
    let post1 = [email, password, profile]; 
    let query = ""
    query = connect.con.query('INSERT INTO login (email, password, profile) values (?,?,?)',
    post1, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("1 - Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                console.log('1 - Error while performing Query.', err);
            } else
                res.status(400).send({ "msg": err.code });
        }
    });
    let post2 = [name, age, nationality, cc, date_birth, phone_nr, address, education, email]
    let query1 = ""
    query1 = connect.con.query('insert into administrator (name, age, nationality, cc, date_birth, phone_nr, address, education, id_login) VALUES (?,?,?,?,?,?,?,?,(select id_login from login where email=?))',
    post2, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "1 - inserted with success"});
            console.log("2 - Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({"msg": err.code});
                console.log('2 - Error while performing Query.', err);
            } else
                res.status(400).send({ "msg": err.code });
        }
    });
}

function readAdmin(req, res) {
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    query = connect.con.query('select login.id_login, administrator.name, login.email, login.password from (login inner join administrator on administrator.id_login = login.id_login) where login.id_login = ?', id_login, function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            res.status(400).send({
                "msg": err.code
            });
        console.log('Error while performing Query.', err);
    }) ;   
}

function listAdmin(req, res) {
    let query = "";
    query = connect.con.query('select name, id_login, age, phone_nr from administrator', function(err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send("Data not found");
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            console.log('Error while performing Query.', err);
    });
}

function deleteAdmin(req, res) {
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    query = connect.con.query('DELETE from administrator where id_login = ?', id_login, function (err, rows, fields){
       console.log(query.sql);
        if(!err) {
            console.log("Number of records affected: " + rows.affectedRows);
            res.status(200).send({"msg" : "deleted with success"});
        } else {
            res.status(400).send({"msg" : err.code});
            console.log('Error while performing query', err);
        } 
    });
    query = connect.con.query('DELETE from login where id_login=?', id_login, function (err, rows, fields){
       console.log(query.sql);
        if(!err) {
            console.log("Number of records affected: " + rows.affectedRows);
            res.status(200).send({"msg" : "deleted with success"});
        } else {
            res.status(400).send({"msg" : err.code});
            console.log('Error while performing query', err);
        } 
    });
}

function updateAdmin(req, res) {
    const age = req.sanitize('age').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const address = req.sanitize('address').escape();
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    let post = [age, phone_nr, address, id_login];
    query = connect.con.query('UPDATE administrator SET age=?, phone_nr=?, address=? WHERE id_login = ?', post, function(err, rows, fields) {
       console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({ "msg": "update with success" });
        }
        else {
            res.status(400).send({ "msg": err.code });
            console.log('Error while performing Query.', err);
        } 
    });
}

// auditor
function addAudit(req, res) {
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const profile = "Auditor";
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const cc = req.sanitize('cc').escape();
    const date_birth = req.sanitize('date_birth').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    let post1 = [email, password, profile] 
    let post2 = [name, age, cc, date_birth, phone_nr, email]
    let query = "";
    query = connect.con.query('INSERT INTO login (email, password, profile) values (?,?,?)', 
    post1, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "1 - inserted with success"});
            console.log("1 - Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                console.log('1 - Error while performing Query.', err);
            } else
                console.log('1 - Error while performing Query.', err);
        }
    });
    let query1="";
    query1 = connect.con.query('insert into auditor (name, age, cc, date_birth, phone_nr, id_login) VALUES (?,?,?,?,?,(select id_login from login where email=?))', 
    post2, function (err, rows, fields) {
        console.log(query1.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "1 - inserted with success"});
            console.log("2 - Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                console.log('2 - Error while performing Query.', err);
            } else
                console.log('2 - Error while performing Query.', err);
        }
    });
}

function readAudit(req, res) {
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    query = connect.con.query('select login.id_login, auditor.name, login.email, login.password from (login inner join auditor on auditor.id_login = login.id_login) where login.id_login = ?', [id_login], function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            res.status(400).send({
                "msg": err.code
            });
        console.log('Error while performing Query.', err);
    }) ; 
}

function listAudit(req, res) {
    let query = "";
    query = connect.con.query('select id_login, name, age, phone_nr from auditor', function(err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send("Data not found");
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            console.log('Error while performing Query.', err);
    });
}

function deleteAudit(req, res) {
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    query = connect.con.query('DELETE from auditor where id_login = ?', id_login, function (err, rows, fields){
       console.log(query.sql);
        if(!err) {
            console.log("Number of records affected: " + rows.affectedRows);
            res.status(200).send({"msg" : "deleted with success"});
        } else {
            res.status(400).send({"msg" : err.code});
            console.log('Error while performing query', err);
        } 
    });
    query = connect.con.query('DELETE from login where id_login=?', id_login, function (err, rows, fields){
       console.log(query.sql);
        if(!err) {
            console.log("Number of records affected: " + rows.affectedRows);
            res.status(200).send({"msg" : "deleted with success"});
        } else {
            res.status(400).send({"msg" : err.code});
            console.log('Error while performing query', err);
        } 
    });
}

function updateAudit(req, res) {
    const age = req.sanitize('age').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    let post = [age, phone_nr, id_login];
    query = connect.con.query('UPDATE auditor SET age=?, phone_nr=? WHERE id_login = ?', post, function(err, rows, fields) {
       console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({ "msg": "update with success" });
        }
        else {
            res.status(400).send({ "msg": err.code });
            console.log('Error while performing Query.', err);
        } 
    });
}

function updateUser(req, res) {
    const id_login = req.sanitize('id_login').escape();
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    let query = "";
    let post = [email, password, id_login];
    query = connect.con.query('UPDATE login SET email=?, password=? WHERE id_login= ?', post, function(err, rows, fields) {
       console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({ "msg": "update with success" });
        }
        else {
            res.status(400).send({ "msg": err.code });
            console.log('Error while performing Query.', err);
        } 
    });
    
}

function readUsers(req, res) {
    let query = "";
    query = connect.con.query('select id_login, email, profile from login where profile="Administrador" union select id_login, email, profile from login where profile="Auditor"', function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send("Data not found");
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            console.log('Error while performing Query.', err);
    });  
}

module.exports = {
    listAdmin: listAdmin,
    readAdmin: readAdmin,
    createAdmin: addAdmin,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin,
    
    listAudit : listAudit,
    readAudit : readAudit,
    createAudit :  addAudit,
    updateAudit : updateAudit,
    deleteAudit : deleteAudit,
    
    selectLogin : login,
    updateUser : updateUser,
    allUsers : readUsers
}