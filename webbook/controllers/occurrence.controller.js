const connect = require('../assets/bd');

// OCCURRENCE
function readOccurrence(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from occurrence where id_occurrence = ?', [id_occurrence],
        function(err, rows, fields) {
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
        });
}

function listOccurrence(req, res) {
    connect.con.query ('SELECT * FROM occurrence order by id_occurrence', function (err, rows, fields) {
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
    const post = {
        id_occurrence: id_occurrence
    }
    connect.con.query('DELETE from occurrence where id_occurrence=?', post, function (err, rows, fields) {
        if (!err) {
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            }
            else {
                res.status(200).send({
                    "msg": "success"
                });
            }
        } else {
            console.log('Error while performing query', err);
        }
    });
}

function updateOccurrence(req, res) {
    const arrival = req.sanitize('arrival').escape();
    const departure = req.sanitize('departure').escape();
    const cost = req.sanitize('cost').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    let post= {
        arrival: arrival,
        departure: departure,
        cost: cost,
        id_occurrence: id_occurrence
    };
    query = connect.con.query('UPDATE occurrence SET arrival=?, departure=?, cost=? WHERE id_occurrence=?', post, function(err, rows, fields) {
        console.log(query.sql);
        if(!err){
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({ "msg": "updated with success" });
        } else {
            res.status(400).send({ "msg": err.code});
            console.log('Error while performing query', err);
        }
    });
}

//OPERATIONAL OCCURRENCE
function addRow(req, res) {
    let sql = 'INSERT INTO operational_occurrence (statute, points, arrival, departure, presence, id_operational, id_occurrence) VALUES (?,?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.statute,
        req.body.points,
        req.body.arrival,
        req.body.departure,
        req.body.presence,
        req.body.id_operational,
        req.body.id_occurrence
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readOpOcurr(req, res) {
    let sql = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM operational_occurrence ';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}

function readIdOccur(req, res) {
    let sql = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM operational_occurrence WHERE id_occurrence = ?';    
    global.connection.query (sql, [
        req.params.id_occurrence
        ], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        if (results.length == 0) return res.status(404).end();
        return res.json(results);
    });
}

function readIdOp(req, res) {
    let sql = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM operational_occurrence WHERE id_operational = ?';    
    global.connection.query (sql, [
        req.params.id_operational
        ], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        if (results.length == 0) return res.status(404).end();
        return res.json(results);
    });
}

function deleteRow(req, res) {
    let sql = "DELETE from operational_occurrence where id_operational = ? and id_occurrence = ?";
    global.connection.query(sql, [
        req.params.id_operational,
        req.params.id_occurrence
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

function updateRow(req, res) {
    let sql = "UPDATE operational_occurrence SET statute=?, points=?, arrival=?, departure=?, presence=? WHERE id_operational= ? and id_occurrence= ?";
    //(statute, points, arrival, departure, presence, id_operational, id_occurrence)
    global.connection.query(sql, [
        req.body.statute,
        req.body.points,
        req.body.arrival,
        req.body.departure,
        req.body.presence,
        req.params.id_operational,
        req.params.id_occurrence
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    listOccurrence: listOccurrence,
    readOccurrence: readOccurrence,
    updateOccurrence: updateOccurrence,
    deleteOccurrence: deleteOccurrence
};