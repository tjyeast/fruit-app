const fruits = require('../models/fruits');

const index = (req, res) => {
    res.render('index.ejs', {
        fruits: fruits
    });
}

const show = (req, res) => {
    let index = req.params.index
    res.render('show.ejs', {
        fruit: fruits[index]
    })
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const postFruit = (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    res.redirect('/fruits')
}

const deleteFruit = (req, res) => {
    fruits.splice(req.params.index, 1);
    res.redirect('/fruits')
}

const renderEdit = (req, res) => {
    res.render('edit.ejs', {
        fruit: fruits[req.params.index],
        index: req.params.index
    })
}

const editFruit = (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else{
        req.body.readyToEat = false;
    }

    fruits[req.params.index] = req.body;
    res.redirect('/fruits');
}

module.exports = {
    index,
    show,
    renderNew,
    postFruit,
    deleteFruit,
    renderEdit,
    editFruit
}