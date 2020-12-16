const connect = require ('../assets/bd');

//SELECTS
function readFAverage(req, res) {
    const regist = req.sanitize('regist').escape();
    let query = "";
    query = connect.con.query('SELECT fuel_average from vehicle where regist=?', regist, function (err, rows, fields) {
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
    readFAverage: readFAverage
};