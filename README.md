# TechBlog

![alt text](/Assets/Images/TechBlog-Screenshot.png)

## Description
Welcome to the TechBlog, where you can see blogs that are monitored from the back end and are provided new data from the front end of the website. You will see the experience of being able to login or signup on the website to provide your own blogs as well as creating new posts, editing posts and deleting the posts anytime you want. I learned about using routes, models, and handlebars that allow the back end to communicate with the front end with the users that post blod data and where it stores the data into the website for when they log in again. If the user is not logged in, when they click on the dashboard, they will be required to login or sign up to access the blogs on the website. The login is made to be set at a specific times for how long the user is allowed to be in unless they are away from the computer for a good amount of time for when they have to login again. All of the passwords anyone uses and creates to access the blog creations will have their passwords encrypt with the bcrypt node function in the background so it is harder to crack the user's password. This website also has APIs that have information stored by the users on the front end and are saved for next time they login Enjoy your blog entires on the TechBlog!

## Link


## Table of Contents
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 * [Resources](#resources)

## Installation
You will need these npm (Node Package Manager) in order to use the TechBlog with these commands:
```
npm install
npm install express-handlebars
npm install dotenv
npm install pg
npm install sequelize
npm install express-session
npm install bcrypt
```
## Usage
You can use the "Node.js" terminal to check out TechBlog for information in the database along with adding blogs on the website

## License
This project is licensed with MIT

## Contributing
All the contributions to this project is all done by Miles Wildmore


## Tests

When you enter the terminal, you will need to open up SQL to bring in the database to the main terminal. Use the following command along with your username before you type in your password:
```
psql -U 

```
After you type in the password, be sure to type the following command to get rid of an existing database and create a new one to avoid mixing different databases:
```
\i schema.sql
```
Then type in this command to leave the database:
```
\q
```

To test out the TechBlog, test the data and to see all the information featured in the database, navigate to the server js file, and use the follow commands in the terminal:
```
npm run seed
node server.js

```

If you want to leave TechBlog, hold "CTRL+C" ("CMD+C" for Mac) to stop hosting localhost 3001.

## Resources

Link to npm page : https://www.npmjs.com/

Link to get node.js: https://nodejs.org/

## Questions
If you would like contact me for further information, be sure to reach out to me at mileswildmore@hotmail.com

If you would like to know how to setup dependencies, check out my repo at https://github.com/mileswildmore18