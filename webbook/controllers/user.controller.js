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
    const id_login = req.sanitize('id_login').escape();
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const profile = "Administrador";
    const id_admin = req.sanitize('id_admin').escape();
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const nationality = req.sanitize('nationality').escape();
    const cc = req.sanitize('cc').escape();
    const date_birth = req.sanitize('date_birth').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const address = req.sanitize('address').escape();
    let post1 = [
        id_login, email, password, profile
    ]
    let post2 = [id_admin, name, age, nationality, cc, date_birth, phone_nr, address, id_login]
    let query = ""
    query = connect.con.query('INSERT INTO login (id_login, email, password, profile) values (?,?,?,?)', post1, 
    function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "1 - inserted with success"});
            console.log("1 - Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({"msg": err.code});
                console.log('1 - Error while performing Query.', err);
            } else
                res.status(400).send({ "msg": err.code });
        }
    });
    query = connect.con.query('insert into administrator (id_admin, name, age, nationality, cc, date_birth, phone_nr, address, id_login) VALUES (?,?,?,?,?,?,?,?,?)', post2, 
    function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "2 - inserted with success"});
            console.log("2- Number of records inserted: " + rows.affectedRows);
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
    query = ('select login.id_login, administrator.name, login.email, login.password from (login inner join administrator on administrator.id_login = login.id_login) where login.id_login = ?', id_login, function (err, rows, fields) {
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
    query = connect.con.query('select login.id_login, administrator.name, login.email, login.password from (login inner join administrator on administrator.id_login = login.id_login)', function(err, rows, fields) {
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
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const nationality = req.sanitize('nationality').escape();
    const cc = req.sanitize('cc').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const address = req.sanitize('address').escape();
    const id_admin = req.sanitize('id_admin').escape();
    let query = "";
    let post = [name, age, nationality, cc, phone_nr, address, id_admin];
    query = connect.con.query('UPDATE administrador SET name=?, age=?, nationality=?, cc=?, phone_nr=?, address=? WHERE id_admin = ?', post, function(err, rows, fields) {
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
    const id_login = req.sanitize('id_login').escape();
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const profile = "Auditor";
    const id_auditor = req.sanitize('id_auditor').escape();
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const cc = req.sanitize('cc').escape();
    const date_birth = req.sanitize('date_birth').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    let post1 = [
        id_login, email, password, profile
    ]
    let post2 = [
        id_auditor, name, age, cc, date_birth, phone_nr, id_login
        ]
    let query = ""
    query = connect.con.query('INSERT INTO login (id_login, email, password, profile) values (?,?,?,?);', post1, 
    function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "1 - inserted with success"});
            console.log("1 - Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({"msg": err.code});
                console.log('1 - Error while performing Query.', err);
            } else
                res.status(400).send({ "msg": err.code });
                console.log('1 - Error while performing Query.', err);
        }
    });
    query = connect.con.query('insert into auditor (id_auditor, name, age, cc, date_birth, phone_nr, id_login) VALUES (?,?,?,?,?,?,?)', post2, 
    function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "2 - inserted with success"});
            console.log("2 - Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({"msg": err.code});
                console.log('2 - Error while performing Query.', err);
            } else
                res.status(400).send({ "msg": err.code });
                console.log('2 - Error while performing Query.', err);
        }
    });
}

function readAudit(req, res) {
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    query = ('select login.id_login, auditor.name, login.email, login.password from (login inner join auditor on auditor.id_login = login.id_login) where login.id_login = ?', id_login, function (err, rows, fields) {
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
    query = connect.con.query('select login.id_login, auditor.name, login.email, login.password from (login inner join auditor on auditor.id_login = login.id_login)', function(err, rows, fields) {
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
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const cc = req.sanitize('cc').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const id_auditor = req.sanitize('id_auditor').escape();
    let query = "";
    let post = [name, age, cc, phone_nr, id_auditor];
    query = connect.con.query('UPDATE auditor SET name=?, age=?, cc=?, phone_nr=? WHERE id_auditor = ?', post, function(err, rows, fields) {
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

function updateUser(req, res) {const name = req.sanitize('name').escape();
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    let query = "";
    let post = [email, password];
    query = connect.con.query('UPDATE auditor SET email=?, password=? WHERE id_login= ?', post, function(err, rows, fields) {
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


module.exports = {
    listAdmin: listAdmin,
    readAdmin: readAdmin,
    createAdmin: addAdmin,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin,
    
    listAudit : listAudit,
    readAudit : readAudit,
    createAudit :  addAudit,
    updateAudit : addAudit,
    deleteAudit : deleteAudit,
    
    selectLogin : login,
    updateUser : updateUser
}