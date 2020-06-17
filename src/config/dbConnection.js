const mysql = require('mysql');
module.exports = () =>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'news_portal'
    });
}