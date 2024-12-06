// Import the required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root',      // Replace with your MySQL username
    password: 'Soumya@1998', // Replace with your MySQL password
    database: 'testdb',   // Replace with your database name
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1);
    }
    console.log('Connected to MySQL');
});

// API endpoint: Get all items
app.get('/api/items', (req, res) => {
    const query = 'SELECT * FROM items';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Database query failed' });
        } else {
            res.json(results);
        }
    });
});

// API endpoint: Add a new item
app.post('/api/items', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const query = 'INSERT INTO items (name) VALUES (?)';
    db.query(query, [name], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Database query failed' });
        } else {
            res.status(201).json({ id: result.insertId, name });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
