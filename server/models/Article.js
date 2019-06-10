const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
    title: String,
    text: String,
    author: String,
    date: Date
});

var Article = module.exports = mongoose.model('Article', ArticleSchema);