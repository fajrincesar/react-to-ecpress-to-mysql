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

app.get('/data', function(req,res){ //get all data from databases
    var sql = 'select * from worker';
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/data/:id', function(req,res){ //get spesific data from database
    var sql = `select * from worker where nama = '${req.params.id}'`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/input', function(req,res){ //post data into databases
    var data = {nama:req.body.nama, usia:req.body.usia};
    var sql = 'insert into worker set ?';
    db.query(sql, data, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send({
            type:'POST', 
            nama:req.body.nama, 
            usia:req.body.usia
        });
    });
});

app.listen(4231, ()=>{
    console.log('server @port 4231')
});