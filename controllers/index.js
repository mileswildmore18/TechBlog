const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
const dashboardRoutes = require('./dashboardRoutes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// router.use('*',(req, res) => {
//     res.send("<h1>Wrong Route!</h1>")
//   });
  
  module.exports = router;