const connect = require('../assets/bd');

//OCCURRENCE
function readOccurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from occurrence where id_occurrence = ?', [id_occurrence],
        function(err, rows, fields) {
            if (!err) {
                //verifica os resultados se o n�mero de linhas for 0 devolve dados n�o encontrados, caso contr�rio envia os resultados (rows).
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

function updateOccurrenceArrival(req, res) {
    const arrival = req.sanitize('arrival').escape();
    const cost = req.sanitize('cost').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        arrival,
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

function updateOccurrenceCost(req, res) {
    const cost = req.sanitize('cost').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        cost,
        id_occurrence
    ]
    let query = "";
    query = connect.con.query('UPDATE occurrence SET cost=? WHERE id_occurrence=?', post, function (err, rows, fields){
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

//witness occurrence
function readByWitOccur(req, res) {
    const id_witness = req.sanitize('id_witness').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape(); 
    let post = [
        id_occurrence, id_witness
    ]
    connect.con.query('SELECT id_witness, id_occurrence, testimony, date, justification from witness_occurrence where id_occurrence =? and id_witness = ?', post,
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

function listWitByOccur(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query ('SELECT id_witness, id_occurrence, testimony, date, justification FROM witness_occurrence where id_occurrence=?', id_occurrence, 
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

function deleteWitness_occurrence(req, res) {
    const id_witness = req.sanitize('id_witness').escape();
    let query = "";
    query = connect.con.query('DELETE from witness_occurrence where id_witness=?', id_witness, 
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

function updateWitness_occurrence(req, res) {
    const testimony = req.sanitize('testimony').escape();
    const date = req.sanitize('date').escape();
    const justification = req.sanitize('justification').escape();
    const id_witness = req.sanitize('id_witness').escape();
    let post = [
        testimony,
        date,
        group_nr,
        justification,
        id_witness
    ]
    let query = "";
    query = connect.con.query('UPDATE witness_occurrence SET testimony=?, date?, justification=? WHERE id_witness=?', post, function (err, rows, fields){
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

function addWitness_Occurrence(req, res) {
    const id_witness = req.sanitize('id_witness').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const testimony = req.sanitize('testimony').escape();
    const date = req.sanitize('date').escape();
    const justification = req.sanitize('justification').escape();
    const name = null;
    const email = null;
    const place = null;
    const profession = null;
    let post = [
        id_witness, id_occurrence, testimony, date, justification, name, email, place, profession
    ]
    let query = ""
    query = connect.con.query('INSERT INTO witness_occurrence (id_witness, id_occurrence, testimony, date, justification, name, email, place, profession) values (?,?,?,?,?,?)', post, 
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


//MATERIAL OCCURRENCE
function addMaterial(req, res) {
    const id_material = req.sanitize('id_material').escape();
    const material_name = req.sanitize('material_name').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    let post = [ id_material, material_name, id_occurrence ]
    query = connect.con.query('INSERT INTO material_occurrence (id_material, material_name, id_occurrence) VALUES (?,?,?)', post, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({
                "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
        }
        else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({ "msg": err.code });
                console.log('Error while performing Query.', err);
            }
            else res.status(400).send({ "msg": err.code });
        }
    });
}

function readMatOccur(req, res) {
    const id_material = req.sanitize('id_material').escape();
    
    connect.con.query('SELECT id_material, material_name, id_occurrence from material_occurrence_occurrence where id_material = ?', id_material,
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

function listMatByOccur(req, res) {
    const id_occurrence = req.sanitize('id_occurence').escape();
    connect.con.query('SELECT (id_material, material_name, id_occurrence) FROM material_occurrence where id_occurrence=?', id_occurrence,
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

function deleteMatOccur(req, res) {
    const id_material = req.sanitize('id_material').escape();
    connect.con.query('DELETE from material_occurrence where id_material=?', id_material, function(err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
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
        }
        else
            console.log('Error while performing Query.', err);
    });
}

function updateMatOccur(req, res) {
    const material_name = req.sanitize('material_name').escape();
    const id_material = req.sanitize('id_material').escape();
    let query = "";
    let post = [material_name, id_material]
    query = connect.con.query('UPDATE material_occurrence SET material_name=? WHERE id_material=?', post, function(err, rows,
        fields) {
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


///OCCURRENCE-COST
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

//INDIVIDUAL EVALUATION
function listOpPointsTotal(req, res) {
    connect.con.query('Select name , speciality ,SUM(individual_evaluation.score) as points from operational left join individual_evaluation on operational.id_operational=individual_evaluation.id_operational group by individual_evaluation.id_operational',
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

function listOpPointsOccur(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('Select id_operational, name, individual_evaluation.score from (operational right join individual_evaluation on operational.id_operational=individual_evaluation.id_operational) where individual_evaluation.id_occurrence=?', id_occurrence,
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

function deleteIndividual_eval(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_operational = req.sanitize('id_operational').escape();
    let post = [id_occurrence, id_operational];
    let query = "";
    query = connect.con.query('DELETE from individual_evaluation where id_occurrence=? and id_operational=?', post, 
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

function updateIndividual_eval(req, res) {
    const score = req.sanitize('score').escape();
    const invoices = req.sanitize('invoices').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_operational = req.sanitize('id_operational').escape();
    let post = [
        score,
        invoices,
        id_occurrence,
        id_operational
    ]
    let query = "";
    query = connect.con.query('UPDATE individual_evaluation SET score=?, invoices? WHERE id_occurrence=? and id_operational=?', post, function (err, rows, fields){
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

function addIndividual_eval(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_operational = req.sanitize('id_operational').escape();
    const score = req.sanitize('score').escape();
    const invoices = req.sanitize('invoices').escape();
      let post = [
        id_occurrence, id_operational, score, invoices,   ]
    let query = ""
    query = connect.con.query('INSERT INTO individual_evaluation (id_occurrence, id_operational, score, invoices) values (?,?,?,?)', post, 
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


//GROUP EVALUATION
function readOccur(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from group_evaluation where id_occurrrence = ?', id_occurrence,
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

function listGEval(req, res) {
    connect.con.query ('SELECT * FROM group_evaluation order by id_occurrence', 
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

function deleteGEval(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('DELETE from group_evaluation where id_occurrence=?', id_occurrence, 
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

function updateGEval(req, res) {
    const score = req.sanitize('score').escape();
    const invoices= req.sanitize('invoices').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        score,
        invoices,
        id_occurrence
    ]
    let query = "";
    query = connect.con.query('UPDATE group_evaluation SET score=?, invoices=? WHERE id_occurrence=?', post, function (err, rows, fields){
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

function addGEval(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_auditor = req.sanitize('id_auditor').escape();
    const score = req.sanitize('score').escape();
    const invoices = req.sanitize('invoices').escape();
    let post = [
        id_occurrence, id_auditor, score, invoices,   
    ]
    let query = ""
    query = connect.con.query('INSERT INTO group_evaluation (id_occurrence, id_auditor, score, invoices) values (?,?,?,?)', post, 
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


//CHECKLIST
function readAnswers(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from checklist where id_occurrence = ?', id_occurrence,
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

function deleteChecklist(req, res) {
    const id_occurrence = req.sanitize('id_checklist').escape();
    let query = "";
    query = connect.con.query('DELETE from checklist where id_occurrence=?', id_occurrence, 
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

function updateChecklist(req, res) {
    const question_1 = req.sanitize('question_1').escape();
    const question_2 = req.sanitize('question_2').escape();
    const question_3 = req.sanitize('question_3').escape();
    const question_4 = req.sanitize('question_4').escape();
    const question_5 = req.sanitize('question_5').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        question_1,
        question_2,
        question_3,
        question_4,
        question_5,
        id_occurrence
    ]
    let query = "";
    query = connect.con.query('UPDATE checklist SET question_1=?, question_2=?, question_3=?, question_4=?, question_5=? WHERE id_occurrence=?', post, function (err, rows, fields){
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

function addChecklist(req, res) {
    const idq1 = req.sanitize('idq1').escape();
    const question_1 = req.sanitize('question_1').escape();
    const idq2 = req.sanitize('idq2').escape();
    const question_2 = req.sanitize('question_2').escape();
    const idq3 = req.sanitize('idq3').escape();
    const question_3 = req.sanitize('question_3').escape();
    const idq4 = req.sanitize('idq4').escape();
    const question_4 = req.sanitize('question_4').escape();
    const idq5 = req.sanitize('idq5').escape();
    const question_5 = req.sanitize('question_5').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let post = [
        idq1, question_1, idq2, question_2, idq3, question_3, idq4, question_4, idq5, question_5, id_occurrence
    ]
    let query = ""
    query = connect.con.query('INSERT INTO checklist (id_occurrence, idq1, question_1, idq2, question_2, idq3, question_3, idq4, question_4, idq5, question_5) values (?,?,?,?,?,?,?,?,?,?,?)', post, 
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
    listOccurrence: listOccurrence,
    readOccurrence: readOccurrence,
    updateOccurrenceArrival: updateOccurrenceArrival,
    updateOccurrenceCost : updateOccurrenceCost,
    deleteOccurrence: deleteOccurrence,

    listOpOccurrence : listOpByOccur,
    readByOperationalOcur : readOpOccur,
    deleteOperationalOccurrence : deleteOpOccur,
    updateOperationalOccurrence : updateOpOccur,

    listWitOccurrence : listWitByOccur,
    readWitOccurrence : readByWitOccur,
    deleteWitOccur : deleteWitness_occurrence,
    updateWitOccur : deleteWitness_occurrence,
    createWitOccur : addWitness_Occurrence,

    listMatOccurrence : listMatByOccur,
    readMatOccurrence : readMatOccur,
    deleteMatOccur : deleteMatOccur,
    updateMatOccur : updateMatOccur,
    createMatOccur : addMaterial,

    readCostOccurrence : readCost,
    deleteCostOccur : deleteCost,
    updateCostOccur : updateCostDuration,
    createCostOccur : addCost,

    listOpPointsTotal : listOpPointsTotal,
    listOpPointsOccur : listOpPointsOccur,
    deleteIndEvaluation : deleteIndividual_eval,
    updateIndEvaluation : updateIndividual_eval,
    createIndEvaluation : addIndividual_eval,

    listGEvaluation : listGEval,
    readOccurEval : readOccur,
    deleteGEvaluation : deleteGEval,
    updateGEvaluation : updateGEval,
    createGEvaluation : addGEval,

    readChecklist : readAnswers,
    createChecklist : addChecklist,
    updateChecklist : updateChecklist,
    deleteChecklist : deleteChecklist
};