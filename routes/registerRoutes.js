const express = require(express);
const router = express.Router();

//import model
const Registration = require('../models/Registration')

// routes
router.get('/register', (req, res) => {
  res.render('register')
});

router.post("/register", (req, res) => {
    // req.body means all the data in our body 
    const person = new Registration(req.body)
    person.save()
  });