const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class BlogPost extends Model {}
BlogPost.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
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
    },
    createdBy: {
        type: DataTypes.UUID,
		references: {
			model: 'user',
			key: 'username',
		}
    },
}, {
    sequelize,
	timestamps: false,
	freezeTableName: true,
	modelName: 'blogPost'
});
module.exports = BlogPost;