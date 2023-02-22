const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 64]
        }
    },
    post: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 240]
        }
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize
})

module.exports = Post;