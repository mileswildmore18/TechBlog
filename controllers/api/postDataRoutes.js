const router = require('express').Router();
const { postData, userData } = require('../../models');

router.get('/', async (req, res) => {
    // finds all postData include its userData
    try {
      const post = await postData.findAll({
        include: [{ model: userData }]
      });
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const post = await Category.findByPk(req.params.id, {
        include: [{ model: userData }],
      });
  
      // displays if no post data is found
      if (!post) {
        res.status(404).json({ message: "No posts found with that id!" });
        return;
      }
      //comes back with post data results
      res.status(200).json(post)
    } catch (err) {
      //comes back if server side errors
      res.status.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    // creates a new post
    try {
      const post = await postData.create(req.body);
  
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    // updates a category by its `id` value
    const post = await postData.update(req.body, {
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
        const post = await postData.destroy({
          where: {
            id: req.params.id,
          },
        });
        console.log(post)
        if (!post) {
          res.status(404).json({ message: "No posts found with that id!" });
          return;
        }
        res.status(200).json(post);
      } catch (err) {
        console.error(err)
        res.status(500).json(err);
      }
    });
  
  module.exports = router;
  