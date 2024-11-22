// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Express app
const app = express();

// Port
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const posts = require('./routes/posts');
app.use('/api/posts', posts);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});