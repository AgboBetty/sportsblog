const express = require('express');
const router =  express.Router();

//Articles = require('../models/article.js');

router.get('/',(req, res , next)=>{
    Article.getArticles((err, articles)=>{
        res.render('index', {
            title: 'index',
            articles: articles
        });
    }, 4);
});

module.exports = router;