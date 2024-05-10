const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect("/login"); //Redirects if user is not logged in
    
    } else {
      next(); // Proceed to the next middleware/route handler
    }
   
  };
  
  module.exports = withAuth;
  