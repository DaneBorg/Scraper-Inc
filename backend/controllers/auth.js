const axios = require('axios')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// for bcrypt
const saltRounds = 10



const login = (req, res) => {
    const { username, password } = req.body
  
    axios(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        grant_type: 'password',
        username: username,
        password: password,
        audience: process.env.AUTH0_IDENTITY,
        connection: 'Username-Password-Authentication',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET
      }
    })
    .then(response => {
      const { access_token } = response.data
      res.json({
        access_token
      })
    })
    .catch(e => {
      res.send(e)
    })

}

    // module.exports = {
    //     // signup,
    //     login
    //   }