const express = require('express');
const path = require('path');

const app = express();
const identifyRouter = require('./api/identify'); // Import the identify router
const indexRouter = require('./api/index'); // Import the index router

app.use(express.static(path.join(__dirname, '')));

// Route handlers
app.use('/', indexRouter);
app.use('/api', identifyRouter); // Mount the identify router under /api

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
