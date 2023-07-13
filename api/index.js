require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'awf568bh1jksu70ty894g';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.o7ix6h4.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
        res.status(400).json('wrong credentials');
        return;
    }
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json('OK');
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
    res.json(token);
});

app.listen(4000);