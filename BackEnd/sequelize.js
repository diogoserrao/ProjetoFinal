var dotenv = require('dotenv');
dotenv.config();

const{ Sequelize, DataTypes} = require('sequelize');https://open.spotify.com/album/5VdyJkLe3yvOs0l4xXbWp0
const UserDataModel = require('./models/Users');
const PostDataModel = require('./models/Posts');
const CommentDataModel = require('./models/Comments');
const LikeDataModel = require('./models/Likes');
const Administrator = require('./models/Admins')(Sequelize);
console.log(process.env.DB_SCHEMA)

const sequelize_instance = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS,{ 
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    host: process.env.DB_HOST,
})

const User = UserDataModel(sequelize_instance, DataTypes);
const Post = PostDataModel(sequelize_instance, DataTypes);
const Comment = CommentDataModel(sequelize_instance, DataTypes);
const Like = LikeDataModel(sequelize_instance, DataTypes);

sequelize_instance.authenticate()
    .then (() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });

sequelize_instance.sync({ force: false})
    .then(() =>{
        console.log("Tables Created!");
        //User.create({email:'diogoserrao@gmail.com', pass:'12345',username:'diogo23',fullname:'diogoaeqwe1123'})
    });


module.exports = {
    User, Post, Comment, Like
}
