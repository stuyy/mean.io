const router = require('express').Router();
const Article = require('../models/Article');

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
    
    let article = new Article({
        title: req.body.title,
        author: req.user.name,
        text: req.body.data,
        email: req.user.email,
        date: new Date().toDateString()
    });
    article.save()
    .then(success => {
        console.log("Success..." + JSON.stringify(success));
        res.status(200).send('success');
    }).catch(err => {
        res.status(400).send('fail to post');
    })
});

router.get('/get', (req, res) => {
    Article.find().then(articles => {
        var articlesArray = articles.map(article => {
            return {
                title: article.title,
                date: article.date,
                author: article.author,
                text: article.text
            }
        });
        res.status(200).json(articlesArray);
    }).catch(err => console.log(err));
})
module.exports = router;