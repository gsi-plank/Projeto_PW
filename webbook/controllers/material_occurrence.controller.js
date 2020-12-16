const connect = require('../assets/bd');

//SELECT

function readMaterial_Occurrence(req, res) {
    //criar e executar a query de leitura na BD
    const id_material = req.sanitize('id_material').escape();
    connect.con.query('SELECT * from material_occurrence where id_material = ?', id_material,
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

//Select com o id_occurrence

function readIDOccur(req, res) {
    //criar e executar a query de leitura na BD
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('SELECT * from material_occurrence where id_occurrence = ?', id_occurrence,
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

function listMaterial_Occurrence(req, res) {
    connect.con.query ('SELECT * FROM material_occurrence order by id_occurrence', 
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

function deleteMaterial_Occurrence(req, res) {
    const id_material = req.sanitize('id_material').escape();
    let query = "";
    query = connect.con.query('DELETE from Material_occurrence where id_material=?', id_material, 
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

function updateMaterial_Occurrence(req, res) {
    const material_name = req.sanitize('material_name').escape();
    const id_material = req.sanitize('id_material').escape();
    let post = [
        material_name,
        id_material
    ]
    let query = "";
    query = connect.con.query('UPDATE material_occurrence SET material_name=? WHERE id_material=?', post, function (err, rows, fields){
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

function addMaterial_Occurrence(req, res) {
    const material_name = req.sanitize('material_name').escape();
    const id_material = req.sanitize('id_material').escape();
    let post = [
        material_name, id_material
    ]
    let query = ""
    query = connect.con.query('INSERT INTO material_occurrence (material_name, id_material) values (?,?)', post, 
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
    read: readIdOccur,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};