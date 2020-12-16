const connect = require('../assets/bd');

//SELECT

//Vehicle
function readVehicle(req, res) {
    //criar e executar a query de leitura na BD
    const regist = req.sanitize('regist').escape();
    connect.con.query('SELECT * from vehicle where regist = ?', regist,
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


function listVehicle(req, res) {
    connect.con.query ('SELECT * FROM vehicle order by regist', 
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

function deleteVehicle(req, res) {
    const regist = req.sanitize('regist').escape();
    let query = "";
    query = connect.con.query('DELETE from vehicle where regist=?', regist, 
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

function updateVehicle(req, res) {
    const capacity = req.sanitize('capacity').escape();
    const fuel_average = req.sanitize('fuel_average').escape();
    const brand = req.sanitize('brand').escape();
    const model = req.sanitize('model').escape();
    const regist = req.sanitize('regist').escape();
    let post = [
        capacity,
        fuel_average,
        brand,
        model,
        regist
    ]
    let query = "";
    query = connect.con.query('UPDATE occurrence SET capacity=?, fuel_average=?, brand=?, model=? WHERE regist=?', post, 
    function (err, rows, fields){
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

function addVehicle(req, res) {
    const regist = req.sanitize('regist').escape();
    const capacity = req.sanitize('capacity').escape();
    const fuel_average = req.sanitize('fuel_average').escape();
    const brand = req.sanitize('brand').escape();
    const model = req.sanitize('model').escape();
    const id_admin = req.sanitize('id_admin').escape();
    let post = [
        regist, capacity, fuel_average, brand, model, id_admin,
    ]
    let query = ""
    query = connect.con.query('INSERT INTO Vehicle (regist, capacity, fuel_average, brand, model, id_admin) values (?,?,?,?,?,?)', post, 
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