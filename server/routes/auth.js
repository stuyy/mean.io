const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');

router.get('/register', (req, res) => {
    res.send('ok');
});

router.post('/register', [ check('email').isEmail().withMessage('Please enter a valid e-mail address!'), check('password').isLength({ min: 5 }).withMessage('Password is too short! Must be at least 5 characters.')], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(422).json({ errors: errors.array() });
    }
    else
        res.send(200);
})
module.exports = router;