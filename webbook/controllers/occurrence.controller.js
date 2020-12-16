const connect = require('../assets/bd');

//OCCURRENCE
function readOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from occurrence where id_occurrence = ?', id_occurrence,
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

function listOccurrence(req, res) {
    connect.con.query ('SELECT * FROM occurrence order by id_occurrence', 
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

function deleteOccurrence(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('DELETE from occurrence where id_occurrence=?', id_occurrence, function (err, rows, fields){
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

function updateOccurrence(req, res) {
    const arrival = req.sanitize('arrival').escape();
  /*  const departure = req.sanitize('departure').escape();
    const cost = req.sanitize('cost').escape();*/
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        arrival,
   //     departure,
     //   cost, , departure=?, cost=? 
        id_occurrence
    ]
    let query = "";
    query = connect.con.query('UPDATE occurrence SET arrival=? WHERE id_occurrence=?', post, function (err, rows, fields){
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


//OPERATIONAL OCCURRENCE
function listOpOcur(req, res) {
    let query = "";
    query = connect.con.query('SELECT * FROM operational_occurrence', function(err, rows, fields) {
        if (!err) {
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

function readByOc(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('SELECT * from operational_occurrence where id_occurrence=?', id_occurrence, function (err, rows, fields) {
        if (!err) {
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send(rows);
            }
        } else
            res.status(400).send({"msg": err.code});
        console.log('Error while performing Query.', err);
    });
}

function readBy2 (req, res) {
    const id_operational = req.sanitize('id_operational').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        id_occurrence,
        id_operational
    ]
    let query = "";
    query = connect.con.query('SELECT * from operational_occurrence where id_occurrence=? and id_operational=?', post, function (err, rows, fields) {
        if (!err) {
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send(rows);
            }
        } else
            res.status(400).send({"msg": err.code});
        console.log('Error while performing Query.', err);
    });
}

function deleteOpOccur(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_operational = req.sanitize ('id_operational').escape();
    let del = [
        id_occurrence,
        id_operational
    ]
    let query = "";
    query = connect.con.query('DELETE from operational_occurrence where id_occurrence=? and id_operational=?', del, function (err, rows, fields){
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

function updateOpOccur(req, res) {
    const checked = req.sanitize('checked').escape();
    const id_operational = req.sanitize('id_operational').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        checked,
        id_occurrence,
        id_operational
    ]
    let query = "";
    query = connect.con.query('UPDATE operational_occurrence SET checked=? WHERE id_occurrence=? and id_operational=?', post, function (err, rows, fields){
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

///FALTAM OCCURRENCE-MATERIAL E OCCURRENCE-COST

module.exports = {
    listOccurrence: listOccurrence,
    readOccurrence: readOccurrence,
    updateOccurrence: updateOccurrence,
    deleteOccurrence: deleteOccurrence,

    listOpOccurrence : listOpOcur,
    readByOccurrence : readByOc,
    readByOperationalOcur : readBy2,
    deleteOperationalOccurrence : deleteOpOccur,
    updateOperationalOccurrence : updateOpOccur
};