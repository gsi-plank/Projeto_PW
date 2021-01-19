const connect = require('../assets/bd');

//OCCURRENCE-COST
function readCost(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from cost_occurrence where id_occurrence = ?', id_occurrence,
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

function deleteCost(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('DELETE from cost_occurrence where id_occurrence=?', id_occurrence, 
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

function updateCostDuration(req, res) {
    const duration = req.sanitize('duration').escape();
    const num_of_operationals = req.sanitize('num_of_operationals').escape();
    const distance = req.sanitize('distance').escape();
    const cost = req.sanitize('cost').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        duration,
        num_of_operationals,
        distance,
        cost,
        id_occurrence
    ]
    let query = "";
    query = connect.con.query('UPDATE cost_occurrence SET duration=?, num_of_operationals=?, distance=?, cost=? WHERE id_occurrence=?', post, function (err, rows, fields){
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

function addCost(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const duration = req.sanitize('duration').escape();
    const num_of_operationals = req.sanitize('num_of_operationals').escape();
    const distance = req.sanitize('distance').escape();
    const cost = req.sanitize('cost').escape();
    let post = [
        id_occurrence, duration, num_of_operationals, distance, cost    ]
    let query = ""
    query = connect.con.query('INSERT INTO cost-occurrence (id_occurrence, duration, num_of_operationals, distance, cost) values (?,?,?,?,?)', post, 
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
    readCostOccurrence : readCost,
    deleteCostOccur : deleteCost,
    updateCostOccur : updateCostDuration,
    createCostOccur : addCost
}