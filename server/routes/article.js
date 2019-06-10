const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("ok");
});

router.post('/publish', (req, res) => {
    console.log(req.body);
})
module.exports = router;