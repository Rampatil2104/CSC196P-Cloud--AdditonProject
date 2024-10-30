const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET method for addition
app.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        res.status(400).send('Please provide valid numbers for num1 and num2.');
    }
});

// POST method for addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        res.status(400).send('Please provide valid numbers in the JSON body.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
