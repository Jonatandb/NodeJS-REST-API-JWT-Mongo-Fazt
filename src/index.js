import app from './app.js'

app.listen(3000)

app.get('/', (req, res) => {
  res.send('Server working!!')
})

console.log('Server listen on port', 3000)
