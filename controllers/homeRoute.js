const router = require('express').Router();
const { Post, User } = require('../models')
router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const allPosts = await Post.findAll({
      include: [User]
    })
    const posts = allPosts.map((post) => post.get({ plain: true }))
console.log(posts)
    res.render('homepage', { posts }); //renders homepage and brings the post
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }


});

module.exports = router;