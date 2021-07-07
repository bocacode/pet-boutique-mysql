const mysql = require('mysql') // imports mysql library we added from npm
const { dbconfig } = require('./dbconfig') // uses our secrets
const db = mysql.createConnection(dbconfig) // makes connection
db.connect() // opens connection

const pet = {
  name: 'Gary',
  type: 'gecko',
  size: 'small'
}
const customer_name = 'Jeramy'

db.query(`INSERT INTO pets VALUES (null, 
    (SELECT id FROM customers WHERE first_name = "${customer_name}"),
    "${pet.name}", "${pet.type}", "${pet.size}")`, (err, results) => {
      if(err) {
        console.error(err)
      }
      console.log(results)
    })
db.end() // closes our open connection to our mysql database
