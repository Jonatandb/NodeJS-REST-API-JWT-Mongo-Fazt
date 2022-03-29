require('dotenv').config()
import database from './database.js'
import app from './app.js'

app.listen(3000)

console.log('Server listening at http://localhost:%s', 3000)
