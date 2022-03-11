const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config')

class Comment extends Model {}
Comment.init({
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateCreated: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
    },
    user_id: {
        type: DataTypes.INTEGER,
		references: {
			model: 'user',
			key: 'id',
		}
    },
    blog_id: {
        type: DataTypes.INTEGER,
		references: {
			model: 'blogPost',
			key: 'id',
		}
    }
}, {
    sequelize,
	freezeTableName: true,
	modelName: 'comment'
});
module.exports = Comment;