const router = require('express').Router();
const { Animal } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAnimal = await Animal.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    await newAnimal.save();

    res.status(200).json(newAnimal);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const newAnimal = await Animal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newAnimal) {
      res.status(404).json({ message: 'No animal found with this ID!' });
      return;
    }

    res.status(200).json(newAnimal);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {


  try { const updatedAnimal = await Animal.update(req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
  if (!updatedAnimal) {
    res.status(404).json({ message: 'No reptile found with this id' });
    return;
  }
  res.json(updatedAnimal)
 } catch (err) {
   res.status(400).json(err)
 }
});
module.exports = router;
