const router = require('express').Router();
const { Post, User } = require('../models')
const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login"); //Redirects if user is not logged in
  
  } else {
    next(); // Proceed to the next middleware/route handler
  }
};
router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const allPosts = await Post.findAll({
      include: [User]
    })
    const posts = allPosts.map((post) => post.get({ plain: true }))
console.log(posts)
    res.render('homepage', { posts , loggedIn: req.session.loggedIn}); //renders homepage and brings the post
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }


});


router.get('/post/:id', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the comments
    try {
      const postData = await Post.findByPk(req.params.id);

      const post = postData.get({ plain: true });

      res.render('comment', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;