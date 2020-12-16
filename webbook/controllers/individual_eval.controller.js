const connect = require('../assets/bd');

function readIndividual_eval(req, res) {
    //criar e executar a query de leitura na BD
    const id_evaluation = req.sanitize('id_evaluation').escape();
    connect.con.query('SELECT * from individual_evaluation where id_evaluation = ?', id_evaluation,
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

function readIdOp(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.sanitize('id_operational').escape();
    connect.con.query('SELECT * from individual_evaluation where id_operational = ?', id_operational,
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
    connect.con.query('SELECT * from individual_evaluation where id_occurrence = ?', id_occurrence,
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

function listIndividual_eval(req, res) {
    connect.con.query ('SELECT * FROM individual_evaluation order by id_evaluation', 
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

function deleteIndividual_eval(req, res) {
    const id_evaluation = req.sanitize('id_evaluation').escape();
    let query = "";
    query = connect.con.query('DELETE from individual_evaluation where id_evaluation=?', id_evaluation, 
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

function updateIndividual_eval(req, res) {
    const score = req.sanitize('score').escape();
    const invoices = req.sanitize('invoices').escape();
    const id_evaluation = req.sanitize('id_evaluation').escape();
    let post = [
        score,
        invoices,
        id_evaluation
    ]
    let query = "";
    query = connect.con.query('UPDATE individual_evaluation SET score=?, invoices?, id_evaluation=? WHERE id_evaluation=?', post, function (err, rows, fields){
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

function addIndividual_eval(req, res) {
    const id_evaluation = req.sanitize('id_evaluation').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_operational = req.sanitize('id_operational').escape();
    const score = req.sanitize('score').escape();
    const invoices = req.sanitize('invoices').escape();
      let post = [
        id_evaluation, id_occurrence, id_operational, score, invoices,   ]
    let query = ""
    query = connect.con.query('INSERT INTO individual_evaluation (id_evaluation, id_occurrence, id_operational, score, invoices) values (?,?,?,?,?)', post, 
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
    read: readIdInd,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};