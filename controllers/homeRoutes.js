const router = require('express').Router();
const { format } = require('path');
const { Animal, User, Type, Species } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const animalData = await Animal.findAll({
            include: [
               User
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

router.get('/animal', async (req, res) => {
    try {
        res.render('animal', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
});



router.get('/animal/:id', async (req, res) => {
    try {
        const animalData = await Animal.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const animal = animalData.get({ plain: true });

        res.render('view', {
            animal,
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

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/profile', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Animal }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/edit/:id', async (req, res) => {
    try {
        const animalData = await Animal.findByPk(req.params.id, {
            include: [
               User
            ],
        });

        const animal = animalData.get({ plain: true });

        res.render('edit', {
            animal,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
});




module.exports = router;