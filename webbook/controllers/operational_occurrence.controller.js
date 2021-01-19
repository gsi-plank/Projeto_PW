const connect = require('../assets/bd');

//OPERATIONAL OCCURRENCE
function listOpByOccur(req, res) {
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

function readOpOccur(req, res) {
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
    const checked = req.sanitize('check').escape();
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

module.exports = {
    listOpOccurrence : listOpByOccur,
    readByOperationalOcur : readOpOccur,
    deleteOperationalOccurrence : deleteOpOccur,
    updateOperationalOccurrence : updateOpOccur
}