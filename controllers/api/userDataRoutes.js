const router = require('express').Router();
const { userData, postData } = require('../../models');

router.get('/', async (req, res) => {
    // finds all postData include its userData
    try {
      const user = await userData.findAll({
        include: [{ model: postData }]
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const user = await userData.findByPk(req.params.id, {
        include: [{ model: userData }],
      });
  
      // displays if no post data is found
      if (!user) {
        res.status(404).json({ message: "No posts found with that id!" });
        return;
      }
      //comes back with post data results
      res.status(200).json(user)
    } catch (err) {
      //comes back if server side errors
      res.status.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    // creates a new post
    try {
      const user = await userData.create(req.body);
  
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    // updates a category by its `id` value
    const user = await userData.update(req.body, {
      where: {
        //Gets the tag based on the id given in the request parameters
        id: req.params.id,
      },
    }
    );
    return res.json(post);
  }),
  
  
    router.delete('/:id', async (req, res) => {
      // deletes a category by its `id` value
      console.log({ id: req.params.id })
      try {
        const user = await userData.destroy({
          where: {
            id: req.params.id,
          },
        });
        console.log(user)
        if (!user) {
          res.status(404).json({ message: "No users found with that id!" });
          return;
        }
        res.status(200).json(user);
      } catch (err) {
        console.error(err)
        res.status(500).json(err);
      }
    });
  
  module.exports = router;
  