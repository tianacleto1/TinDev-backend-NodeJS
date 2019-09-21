const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://anacleto:admin123@cluster0-v1jhz.mongodb.net/oministack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);