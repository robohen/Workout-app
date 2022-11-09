const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) =>{ 
    //mongoose method, find method returns a promise
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((res,res) => {
    const username = req.body.username;

    const newUser = new User({username});

    //user is saved to the database, then it displays
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;