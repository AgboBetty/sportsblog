const express = require('express');
const router =  express.Router();

Category = require
('../models/category.js');
router.get('/articles', (req, res , next)=> {
res.render('manage_articles', {title: 'Manage Articles'});
});

router.get('/categories',(req, res , next)=>{
    Category.getCategories((err, categories)=>{
        if (err){
            res.send(err);
        }
        res.render('manage_categories', {
            title: 'categories',
            categories : categories
            });
            });
//    res.render('manage_categories', {title: "Manage categories"});
    });
    

router.get('/articles/add',(req, res, next)=> {
    res.render('add_article', {title: 'create Article'});
});

router.get('/categories/add',(req, res, next)=> {
    console.log('fish');
    res.render('add_category', {title: 'create category'});
});

router.get('/articles/edit/:id',(req, res , next)=>{
    res.render('edit_article', {title: "Edit Article"});
    });

    router.get('/categories/edit/:id',(req, res , next)=>{
        res.render('edit_category', {title: "Edit category"});
        });

module.exports = router;