const connect = require('../assets/bd');


//SELECT

function readQuestion(req, res) {
    //criar e executar a query de leitura na BD
    const id_question = req.sanitize('id_question').escape();
    connect.con.query('SELECT * from question where id_question = ?', id_question,
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

function readType(req, res) {
    //criar e executar a query de leitura na BD
    const id_question = req.sanitize('id_occurrence_type').escape();
    connect.con.query('SELECT * from question where occurrence_type = ?', occurrence_type,
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

function listQuestion(req, res) {
    connect.con.query ('SELECT * FROM question order by id_question', 
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

function deleteQuestion(req, res) {
    const id_question = req.sanitize('id_question').escape();
    let query = "";
    query = connect.con.query('DELETE from question where id_question=?', id_question, 
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

//INSERT

function addQuestion(req, res) {
    const occurrence_type = req.sanitize('occurrence_type').escape();
    const question = req.sanitize('question').escape();
    const id_question = req.sanitize('id_question').escape();
    let post = [
        occurrence_type, question, id_question,
    ]
    let query = ""
    query = connect.con.query('INSERT INTO question (occurrence_type, question, id_question) values (?,?,?)', post, 
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

//UPDATE

function updateQuestion(req, res) {
    const occurrence_type = req.sanitize('occurrence_type').escape();
    const question = req.sanitize('question').escape();
    const id_question = req.sanitize('id_question').escape();
    let post = [
        occurrence_type,
        question,
        id_question
    ]
    let query = "";
    query = connect.con.query('UPDATE question SET occurrence_type=?, question=?, id_group=? WHERE id_question=?', post, function (err, rows, fields){
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
    list: readAll,
    read: readID,
    readType: readType(),
    create: addRow,
    update: updateRow,
    delete: deleteRow
};