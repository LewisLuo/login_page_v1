const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

const users = require('./models/user.js')

app.get('/', (req, res) => {
  res.render('login')
})

app.post('/', (req, res) => {
  let input = { email: '', password: '' }
  input = Object.assign(input, req.body)

  const user = users.find((user) => user.email === input.email && user.password === input.password)

  if (user) {
    res.send(`<h1>Welcome Back, ${user.firstName}</h1>`)
  } else {
    const loginFail = 'foo'
    res.render('login', { loginFail })
  }
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})