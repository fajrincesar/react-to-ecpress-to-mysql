const express = require('express');
const app = express()
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'rin',
    password:'rin121412',
    database:'store'
});
db.connect();
app.use(bodyParser.json());

app.get('/data/:id', function(req,res){ //get spesific data from database
    var sql = `select * from ${req.params.id} join kategori using (id_kategori)`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen(424, ()=>{
    console.log('server @port 424')
});