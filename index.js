const mysql = require('mysql')
const { dbconfig } = require('./dbconfig')
const db = mysql.createConnection(dbconfig)
db.connect()
db.query('SELECT * FROM orders', (err, rows) => {
  if(err) {
    console.error('Error from MySQL: ', err)
  }
  console.log('Got back ROWS: ', rows)
})
db.end()
