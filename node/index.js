const express = require('express');
const app = express();
const port = 3000;

async function createConnection (){
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    };
    
    const mysql = require('mysql');
    return mysql.createConnection(config);
}

async function execInsert(){
    const connection = await createConnection();
    connection.query("INSERT INTO user (name) VALUES ('Guilherme');");
    connection.query("INSERT INTO user (name) VALUES ('FullCycle');");
    connection.end();        
}

execInsert();

app.get('/', async (req, res) => {
    const connection = await createConnection();
    const sql = "SELECT * FROM user;";
    connection.query(sql, function(err, result, fields){
        if (err) throw err;
        let html = '<h1>Full Cycle Rocks!<h1/>';
        result.map(r => {html += '<h2>' + r.name + '<h2/>'});
        res.send(html);
    });
})

app.listen(port, async () => {
    console.log('Rodando na porta ' + port);
})