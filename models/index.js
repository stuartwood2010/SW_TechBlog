const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'createdBy',
    onDelete: 'CASCADE',
});
BlogPost.belongsTo(User, {
    foreignKey: 'createdBy',
});
BlogPost.hasMany(Comment, {
    foreignKey: 'blogId',
    onDelete: 'CASCADE',
});
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogId',
});
module.exports = {
    User,
    BlogPost,
    Comment
}