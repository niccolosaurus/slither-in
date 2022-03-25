const router = require('express').Router();
const { format } = require('path');
const { Animal, User } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const animalData = await Animal.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const animals = animalData.map((animal) => animal.get({ plain: true }));

        res.render('homepage', {
            animals,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/animal/:id', async (req, res) => {
    try {
        const animalData = await Animal.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const animal = animalData.get({ plain: true });

        res.render('animal', {
            ...animal,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;