//Server-ralative variables and inclusion
const express = require('express')
const app = express()
const port = 3000

//Middleware inclusion
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

//Routers
const routes = require('./routes')

//App template engines
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

// Server listen message
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})