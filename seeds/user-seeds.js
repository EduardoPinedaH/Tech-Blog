const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        usernmame: 'lalopineda01',
        email: 'lalopineda01@email.com',
        password: 'password123'
    },
    {
        usernmame: 'lalopineda02',
        email: 'lalopineda02@email.com',
        password: 'password123'
    },
    {
        usernmame: 'lalopineda03',
        email: 'lalopineda03@email.com',
        password: 'password123'
    },
    {
        usernmame: 'lalopineda04',
        email: 'lalopineda04@email.com',
        password: 'password123'
    },
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;