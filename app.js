const express = require('express');

//const {Sequelize, DataTypes} = require('sequelize');

//const db = require('./config/db');

//const dbs = require('./model/UserModel');

const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require('./schema/userSchema');
const resolvers = require('./resolvers/userResolver')

const app = express();

const port = 3000;


app.use(express.json());




const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { db }
})

/* const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers
}) */

/* app.post('/user', async (req, res) => {
    try {
        //Send data to the database
        const newUser = new dbs(req.body);
        console.log(newUser);
        await newUser.save();
        //Return the new User
        res.json({user: newUser});
    } catch (error) {
        console.log(error);
    }
})

app.get('/user/:userId', async(req, res) => {
    const userId = req.params.userId;
    try {
        const user = await dbs.findByPk(userId);
        res.json({ user })
    } catch (error) {
        console.log(error);
    }
}) */

/* db.authenticate().then(() => {
    console.log('The connect has been established successfully');
}).catch(err => {
  console.error('The connection has failed with:', err);  
}) */

server.applyMiddleware({ app });
app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})
