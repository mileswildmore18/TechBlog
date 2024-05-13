const router = require('express').Router();
const { Post, User } = require('../models')
const withAuth = require('../utils/authGuard')
router.get('/', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const allPosts = await Post.findAll({
      include: [User]
    })
    const posts = allPosts.map((post) => post.get({ plain: true }))
console.log(posts)
    res.render('dashboard', posts ); //renders homepage and brings the post
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }


});

// router.get('/:id', withAuth, async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     // If the user is logged in, allow them to view the blogs
//     try {
//       const allPosts = await Post.findByPk(req.params.id, {
//         include: [
//           {
//             model: Post,
//             attributes: [
//               'id',
//               'post_name',
//               'post_content',
//             ],
//           },
//         ],
//       });
//       const post = allPosts.get({ plain: true });
//       res.render('post', { post, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

router.get('/post/:id', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the blogs
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

module.exports = router;