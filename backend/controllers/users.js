const mongoose = require('mongoose');
const User = require('../models/userModel')

//const { propfind } = require('../routers/auth');

// const getAllUsers = (req, res) => {
  
//   pool.query("SELECT * FROM users", (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
// }

const getUserById = (req, res) => {
  const id = req.params.userId;

  User.findById(id)
  .exec()
  .then(doc => {
    console.log("from Database: ", doc);
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  })
}

const createUser = (req, res) => {

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    userName: req.body.userName,
    // password: req.body.password,
    email: req.body.email,
  });
  user.save().then(result => {
    console.log(result)
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message:"Handling post request to /users",
    createdUser: user
  })
}

// const updateUserById = (req, res) => {
//   const { firstName, lastName } = req.body
//   let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
//   sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

// const deleteUserByFirstName = (req, res) => {
//   let sql = "DELETE FROM users WHERE first_name = ?"
//   sql = mysql.format(sql, [ req.params.first_name ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
  //getAllUsers,
  getUserById,
  createUser,
  //updateUserById,
  //deleteUserByFirstName
}