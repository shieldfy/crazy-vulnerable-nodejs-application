const config = require('../../config')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : config.MYSQL_HOST,
  port     : config.MYSQL_PORT,
  user     : config.MYSQL_USER,
  password : config.MYSQL_PASSWORD,
  database : config.MYSQL_DB_NAME,
});
 

module.exports.getConnection = function(){
    connection.connect();
    return connection;
};