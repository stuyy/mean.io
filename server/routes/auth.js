const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const passport = require('passport');
const User =  require('../models/User');

router.get('/register', (req, res) => {
    res.send('ok');
});

router.post('/register', [ check('email').isEmail().withMessage('Please enter a valid e-mail address!'), check('password').isLength({ min: 5 }).withMessage('Password is too short! Must be at least 5 characters.')], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(422).json({ errors: errors.array() });
    }
    else
    {
        const foundUser = await User.findOne({ email: req.body.email })
        if(foundUser)
        {
            console.log("Found user");
            console.log(foundUser);
            return res.status(409).json({
                errors: [{
                    msg: "An account is already registered with that e-mail!"
                }]
            })
        }
        else {
            let newUser = {
                email: req.body.email,
                name: req.body.name,
                password: '',
                dateJoined: new Date().toString()
            }

            let user = new User(newUser);
            let hash = await user.encryptPassword(req.body.password);
            user.password = hash;
            const saveUser = await user.save();
            console.log(saveUser);
        }
        res.send(200);
    }
});

router.post('/login', passport.authenticate('local'), (req, res) => {

});
module.exports = router;