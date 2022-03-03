const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Comment extends Model {}
Comment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    text: {
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
    blogId: {
        type: DataTypes.UUID,
		references: {
			model: 'blogPost',
			key: 'id',
		}
    }
}, {
    sequelize,
	timestamps: false,
	freezeTableName: true,
	modelName: 'comment'
});
module.exports = Comment;