const jwt = require('jsonwebtoken');
const User = require('../../models/user')
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,

  };
  
  async function create(req, res) {
    try {
      // Add the user to the database
      const user = await User.create(req.body);
      // token will be a string
      const token = createJWT(user);
      // Yes, we can use res.json to send back just a string
      // The client code needs to take this into consideration
      res.json(token);
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }

  async function login(req, res) {
    try {
      //Query for the user based on the email
      const user = await User.findOne({email: req.body.email})
      if (!user) throw new Error()
      //compare the inputted password
      if (await bcrypt.compare(req.body.password, user.password)) {
      const token = createJWT(user)
      res.json(token)

    } else {
      throw new Error('Invalid Credentials')
    }
    } catch(err) {
      res.status(400).json(err);
  }}

  function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }