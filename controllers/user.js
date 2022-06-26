const router = require('express').Router();

// User Model
const User = require('../models/users');



// Add User
router.post('/add-user', async (req, res) => {

    let data = await User.create({
        name: 'Hamza',
        email: 'hamza@gmail.com',
        password: '12345543221'
    });

    // await data.save();

    res.status(200).json({ 'status': '200', 'response': "ok" });

    res.end();
})




module.exports = router;