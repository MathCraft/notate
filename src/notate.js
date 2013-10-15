

/* uses node-mysql a Node.js module to connect to a remote MySQL db
 *
 * https://github.com/felixge/node-mysql
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql.mathcraft.org',
  user     : 'notateapp',
  password : 'Ypzyfl3.14',
  database : 'wikipedia_en_experiment'
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

      console.log('The solution is: ', rows[0].solution);
});


connection.query('SELECT page_title FROM page LIMIT 1', function(err, rows, fields) {
    if (err) throw err;

    console.log('The selected data is: ', rows[0].solution);
});

connection.end(function(err) {
    // The connection is terminated now
});
