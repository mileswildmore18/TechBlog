//import models
const userData = require('./userData');
const postData = require('./postData');

userData.belongsTo(postData, {
    foreignKey: 'postId',
});
postData.hasMany(userData, {
    foreignKey: 'postId',
});
userData.belongsTo(postData, {
    foreignKey: 'userId',
})

    module.exports = {
        userData,
        postData,
    };