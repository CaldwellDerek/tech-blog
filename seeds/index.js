const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: "person",
        password: "personpassword"
    },
    {
        username: "user",
        password: "userpassword"
    },
    {
        username: "dude",
        password: "dudepassword"
    },
    {
        username: "guy",
        password: "guypassword"
    },
];

const postData = [
    {
        title: "User Title",
        post:"User 1's first post",
        user_id: 1
    },
    {
        title: "User Title",
        post:"Some random stuff User 1 is talking about",
        user_id: 1
    },
    {
        title: "User Title",
        post:"User 1 decided to talk about some more random stuff",
        user_id: 1
    },
    {
        title: "User Title",
        post:"User 2's first post",
        user_id: 2
    },
    {
        title: "User Title",
        post:"User 2 just found some cool stuff to share",
        user_id: 2
    },
    {
        title: "User Title",
        post:"User 3's first post",
        user_id: 3
    },
    {
        title: "User Title",
        post:"User 3 brings some cool stuff to the table",
        user_id: 3
    },
    {
        title: "User Title",
        post:"User 3 is asking for help about a new topic they found",
        user_id: 3
    },
    {
        title: "User Title",
        post:"User 3 posting about a topic that interests them",
        user_id: 3
    },
    {
        title: "User Title",
        post:"User 4's first post",
        user_id: 4
    },
];

const seedUserData = () => User.bulkCreate(userData);
const seedPostData = () => Post.bulkCreate(postData);

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedUserData();
    await seedPostData();
    process.exit(1);
}; 

seedAll();
