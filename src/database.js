require('dotenv').config()
import mongoose from 'mongoose'

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))
