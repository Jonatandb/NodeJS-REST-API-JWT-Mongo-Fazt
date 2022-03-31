require('dotenv').config()
import database from './database.js'
import app from './app.js'

app.listen(process.env.PORT)

console.log('Server listening at http://localhost:%s', process.env.PORT)
