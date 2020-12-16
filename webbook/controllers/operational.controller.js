const connect = require('../assets/bd');


//SELECT
function readOperational(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.sanitize('id_operational').escape();
    connect.con.query('SELECT * from operational where id_operational = ?', id_operational,
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

function listOperational(req, res) {
    connect.con.query ('SELECT * FROM operational order by id_operational', 
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

function deleteOperational(req, res) {
    const id_operational = req.sanitize('id_operational').escape();
    let query = "";
    query = connect.con.query('DELETE from operational where id_operational=?', id_operational, 
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

function updateOperational(req, res) {
    const name = req.sanitize('name').escape();
    const birth_date = req.sanitize('birth_date').escape();
    const address = req.sanitize('address').escape();
    const entry_date = req.sanitize('entry_date').escape();
    const cc = req.sanitize('cc').escape();
    const phone_number = req.sanitize('phone_number').escape();
    const pay_per_hour = req.sanitize('pay_per_hour').escape();
    const operational_type = req.sanitize('operational_type').escape();
    const speciality = req.sanitize('speciality').escape();
    const id_operational = req.sanitize('id_operational').escape();
    let post = [
        name,
        birth_date,
        address,
        entry_date,
        cc,
        phone_number,
        pay_per_hour,
        operational_type,
        speciality,
        id_operational
    ]
    let query = "";
    query = connect.con.query('UPDATE operational SET name=?, birth_date?, address=?, entry_date=?, cc=?, phone_number=?, pay_per_hour=?, operational_type=?, speciality=? WHERE id_operational=?', post, function (err, rows, fields){
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

function addOperational(req, res) {
    const id_operational = req.sanitize('id_operational').escape();
    const name = req.sanitize('name').escape();
    const birth_date = req.sanitize('birth_date').escape();
    const address = req.sanitize('address').escape();
    const entry_date = req.sanitize('entry_date').escape();
    const cc = req.sanitize('cc').escape();
    const phone_number = req.sanitize('phone_number').escape();
    const pay_per_hour = req.sanitize('pay_per_hour').escape();
    const operational_type = req.sanitize('operational_type').escape();
    const speciality = req.sanitize('speciality').escape();
    const id_login = req.sanitize('id_login').escape();
    let post = [
        id_operational, name, birth_date, address, entry_date, cc, phone_number, pay_per_hour, operational_type, speciality, id_login
    ]
    let query = ""
    query = connect.con.query('INSERT INTO operational (id_operational, name, birth_date, address, entry_date, cc, phone_number, pay_per_hour, operational_type, speciality, id_login) values (?,?,?,?,?,?,?,?,?,?,?)', post, 
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