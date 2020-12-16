const connect = require('../assets/bd');

//SELECT
function readFireCom(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.sanitize('id_operational').escape();
    connect.con.query('SELECT * from fire_commander where id_operational = ?', id_operational,
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

function listFireCom(req, res) {
    connect.con.query ('SELECT * FROM fire_commander order by id_operational', 
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

function deleteFireCom(req, res) {
    const id_operational = req.sanitize('id_operational').escape();
    let query = "";
    query = connect.con.query('DELETE from fire_commander where id_operational=?', id_operational, 
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

function updateFireCom(req, res) {
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const cc = req.sanitize('cc').escape();
    const date_birth = req.sanitize('date_birth').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const id_operational = req.sanitize('id_operational').escape();
    let post = [
        name,
        age,
        cc,
        date_birth,
        phone_nr,
        id_operational
    ]
    let query = "";
    query = connect.con.query('UPDATE fire_commander SET name=?, age=?, cc=?, date_birth=?, phone_nr=?, id_operational=?', post, function (err, rows, fields){
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

function addFireCom(req, res) {
    const id_operational = req.sanitize('id_operational').escape();
    const name = req.sanitize('name').escape();
    const age = req.sanitize('age').escape();
    const cc = req.sanitize('cc').escape();
    const date_birth = req.sanitize('date_birth').escape();
    const phone_nr = req.sanitize('phone_nr').escape();
    const id_login = req.sanitize('id_login').escape();
    let post = [
        id_operational, name, age, cc, date_birth, phone_nr, id_login
    ]
    let query = ""
    query = connect.con.query('INSERT INTO fire_commander (id_operational, name, age, cc, date_birth, phone_nr, id_login) values (?,?,?,?,?,?,?)', post, 
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
    read: readID,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};