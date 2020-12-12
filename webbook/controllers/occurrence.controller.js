const connect = require('../assets/bd');

// INSERTS

//SELECTS
function readID(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let sql = 'SELECT (id_occurrence, local, distance, occurrence_type, status, access_code, arrival, departure, cost, origin, description, id_entity, id_request) FROM occurrence WHERE id_occurrence=?';    
    connect.con.query (sql, [
        req.params.id_occurrence
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
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


// DELETE

function deleteRow(req, res) {
    let sql = "DELETE from occurrence where id_occurrence=?";
    global.connection.query(sql, [
        req.params.id_occurrence
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE occurrence SET local=?, distance=?, occurrence_type=?, status=?, access_code=?, arrival=?, departure=?, cost=?, origin=?, description=? WHERE id_occurrence=?";
    //(id_occurrence, local, distance, occurrence_type, status, access_code, arrival, departure, cost, origin, description, id_entity, id_request)
    global.connection.query(sql, [
        req.body.local,
        req.body.distance,
        req.body.occurrence_type,
        req.body.status,
        req.body.access_code,
        req.body.arrival,
        req.body.departure,
        req.body.cost,
        req.body.origin,
        req.body.description,
        req.params.id_occurrence
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    list: readAll,
    read: readID,
    update: updateRow,
    delete: deleteRow
};