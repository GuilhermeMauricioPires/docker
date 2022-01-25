const express = require('express');
const app = express();
const port = 3000;

async function createConnection (){
    console.log('createConnection');
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb',
        raise_on_warnings: false
    };
    
    const mysql = require('mysql');
    return mysql.createConnection(config);
}

async function createTable(){
    console.log('createTable');
    const connection = await createConnection();
    connection.query("CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));");
    connection.end();
}

async function execInsert(){
    console.log('execInsert');
    const connection = await createConnection();
    connection.query("INSERT INTO user (name) VALUES ('Guilherme');");
    connection.query("INSERT INTO user (name) VALUES ('FullCycle');");
    connection.end();        
}

app.get('/', async (req, res) => {
    await execInsert();
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
    await createTable();
    console.log('Rodando na porta ' + port);
})