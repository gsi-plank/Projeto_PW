const connect = require ('../assets/bd');

//SELECTS
function readFAverageByOc(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let query = "";
    query = connect.con.query('SELECT DISTINCT vehicle.fuel_average from (select id_occurrence, regist From occur_vehic_material where id_occurrence=?) as A inner join vehicle on A.regist=vehicle.regist', id_occurrence, function (err, rows, fields) {
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

module.exports = {
    readFAverage: readFAverageByOc
}