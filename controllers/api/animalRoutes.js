const router = require('express').Router();
const { Animal } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAnimal = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newAnimal);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const newAnimal = await Animal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newAnimal) {
      res.status(404).json({ message: 'No blog found with this ID!' });
      return;
    }

    res.status(200).json(newAnimal);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
