const router = require('express').Router();

function isLoggedIn(req, res, next)
{
    if(req.user)
        next();
    else
        console.log("not logged in");
}
router.get('/', (req, res) => {
    res.send("ok");
});

router.post('/publish', isLoggedIn, (req, res) => {
    console.log(req.body);
})
module.exports = router;