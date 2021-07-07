const mysql = require('mysql')
const { dbconfig } = require('./dbconfig')
const db = mysql.createConnection(dbconfig)
db.connect()

const customer_name = 'Jeramy'

db.query(`SELECT customers.*, pets.name, pets.type, pets.size
    FROM customers LEFT JOIN pets ON pets.customer_id = customers.id
    WHERE first_name = "${customer_name}"`, (err, rows) => {
  if(err) {
    console.error('Error from MySQL: ', err)
    return
  }
  if(!rows.length) {
    console.log("WOO HOO! NEW CUSTOMER!")
    return
  }
  if(rows && rows[0] && !rows[0].name) {
    console.warn('Oh no! You do NOT have any Pets!')
  }
  console.log(rows)
})
db.end()
