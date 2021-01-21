const connect = require('../assets/bd');

function addMode(req, res) {
    const id_login = req.sanitize('id_login').escape();
    const mode = req.sanitize('mode').escape();
    let post = [ id_login, mode]
    let query = ""
    query = connect.con.query('insert into darkmode (id_login, mode) values (?,?)', post, 
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

function updateDark(req, res) {
    const mode = 1;
    const id_login = req.sanitize('id_login').escape();
    let post = [mode, id_login]
    let query = "";
    query = connect.con.query('UPDATE darkmode SET mode=? WHERE id_login=?', post, function (err, rows, fields){
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

function updateLight(req, res) {
    const mode = 0;
    const id_login = req.sanitize('id_login').escape();
    let post = [mode, id_login]
    let query = "";
    query = connect.con.query('UPDATE darkmode SET mode=? WHERE id_login=?', post, function (err, rows, fields){
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

function deleteMode(req, res) {
    const id_login = req.sanitize('id_login').escape();
    let query = "";
    query = connect.con.query('DELETE from darkmode where id_login=?', [id_login], 
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

function readMode(req, res) {
    //criar e executar a query de leitura na BD
    const id_login = req.sanitize('id_login').escape();
    connect.con.query('SELECT mode from darkmode where id_login=?', [id_login],
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

module.exports = {
    readMode : readMode,
    addMode : addMode,
    updateDark : updateDark,
    updateLight : updateLight,
    deleteMode : deleteMode
}