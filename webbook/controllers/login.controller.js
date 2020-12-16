const connect = require('../assets/bd');

function readLogin(req, res) {
    //criar e executar a query de leitura na BD
    const id_login = req.sanitize('id_login').escape();
    connect.con.query('SELECT * from login where id_login = ?', id_login,
        function(err, rows, fields) {
            if (!err) {
                //verifica os resultados se o numero de linhas for 0 devolve dados n�o encontrados, caso contr�rio envia os resultados (rows).
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
        });
}

function listLogin(req, res) {
    connect.con.query ('SELECT * FROM login order by id_login', 
    function (err, rows, fields) {
        if (!err) {
            if (rows.length == 0) {
                res.status(404).send("Data not found");
                } else {
                    res.status(200).send(rows);
                }
        } else
            console.log('Error while performing query', err);
    });
}

//DELETE

function deleteLogin(req, res) {
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    query = connect.con.query('DELETE from login where id_login=?', id_login, 
    function (err, rows, fields){
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

//UPDATE

function updateLogin(req, res) {
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const id_login = req.sanitize('id_login').escape();
    let post = [
        email,
        password,
        id_login
    ]
    let query = "";
    query = connect.con.query('UPDATE Login SET email=?, password=?, id_login=? WHERE id_login=?', post, function (err, rows, fields){
        console.log(query.sql);
        if(!err) {
            console.log('Number of records updated: ' + rows.affectedRows);
            res.status(200).send({"msg": "updated with success"});
        } else {
            res.status(400).send({"msg": err.code});
            console.log('Error while performing query', err);
        }
    });
}


//INSERT

function addLogin(req, res) {
    const id_login = req.sanitize('id_login').escape();
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const profile = req.sanitize('profile').escape();
    let post = [
        id_login, email, password, profile
    ]
    let query = ""
    query = connect.con.query('INSERT INTO login (id_login, email, password, profile) values (?,?,?,?)', post, 
    function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({"msg": "1 - inserted with success"});
            console.log("Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({"msg": err.code});
                console.log('Error while performing Query.', err);
            } else
                res.status(400).send({ "msg": err.code });
        }
    });
}


module.exports = {
    list: readAll,
    read: readID,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};