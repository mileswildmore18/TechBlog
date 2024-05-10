//import models
const userData = require('./userData');
const postData = require('./postData');

userData.belongsto(postData, {
    foreignKey: 'postId',
});
postData.hasmany(userData, {
    foreignKey: 'postId',
});
userData.belongsToMany(postData,{
    foreignKey: 'userId',
})

    module.exports = {
        userData,
        postData,
    };