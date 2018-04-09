
const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'rin',
    password:'rin121412',
    database:'store'
});
db.connect();

// var nama = 'dina';
// var sql = 'select * from worker where nama = ?';

// var data = {nama:"chaca", usia:22};
// var sql = 'insert into worker set ?';

// var nama = 'chaca';
// var sql = 'delete from worker where nama = ?';

// var x = 'gebbo';
// var y = 'gebby';
// var sql = 'update worker set nama = ? where nama = ?';
db.query(sql, data, (err, result)=>{
    if (err) throw err;
    console.log(result);
});
db.end();

