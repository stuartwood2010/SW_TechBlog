const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class BlogPost extends Model {}
BlogPost.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
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
}, {
    sequelize,
	timestamps: false,
	freezeTableName: true,
	modelName: 'blogPost'
});
module.exports = BlogPost;