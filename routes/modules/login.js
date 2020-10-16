const express = require('express')
const router = express.Router()

const users = require('../../models/user')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  let input = { email: '', password: '' }
  input = Object.assign(input, req.body)

  const user = users.find((user) => user.email === input.email && user.password === input.password)

  if (user) {
    res.render('success', { firstName: user.firstName })
  } else {
    const loginFail = 'foo'
    res.render('login', { loginFail })
  }
})

module.exports = router