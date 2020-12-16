const connect = require('../assets/bd');


//SELECT
function readIdGroup(req, res) {
    //criar e executar a query de leitura na BD
    const id_group = req.sanitize('id_group').escape();
    connect.con.query('SELECT * from group_evaluation where id_group = ?', id_group,
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

function readIdOccur(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from group_evaluation where id_occurrence = ?', id_occurrence,
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

function readIdAudit(req, res) {
    //criar e executar a query de leitura na BD
    const id_auditor = req.sanitize('id_auditor').escape();
    connect.con.query('SELECT * from group_evaluation where id_auditor = ?', id_auditor,
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

function listGroup_eval(req, res) {
    connect.con.query ('SELECT * FROM group_evaluation order by id_group', 
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

function deleteGroup_eval(req, res) {
    const id_group = req.sanitize('id_group').escape();
    let query = "";
    query = connect.con.query('DELETE from group_evaluation where id_group=?', id_group, 
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

function updateGroup_eval(req, res) {
    const score = req.sanitize('score').escape();
    const invoices= req.sanitize('invoices').escape();
    const id_group = req.sanitize('id_group').escape();
    let post = [
        score,
        invoices,
        id_group
    ]
    let query = "";
    query = connect.con.query('UPDATE group_evaluation SET score=?, invoices=?, id_group=? WHERE id_group=?', post, function (err, rows, fields){
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

function addGroup_eval(req, res) {
    const id_group = req.sanitize('id_group').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_auditor = req.sanitize('id_auditor').escape();
    const score = req.sanitize('score').escape();
    const invoices = req.sanitize('invoices').escape();
    let post = [
        id_group, id_occurrence, id_auditor, score, invoices,     ]
    let query = ""
    query = connect.con.query('INSERT INTO group_evaluation (id_group, id_occurrence, id_auditor, score, invoices) values (?,?,?,?,?)', post, 
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
    read: readIdGroup,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};