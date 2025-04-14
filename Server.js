require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Get the database connection string from the environment variable
const connectionString = process.env.DATABASE_URL;

// Create a new Pool instance using the connection string
const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }  // SSL required by Neon
});

// Search route
app.get('/search', async (req, res) => {
  const { query } = req.query;  // Get search term from query parameter
  try {
    const result = await pool.query(
      'SELECT * FROM practitioners WHERE name ILIKE $1', // ILIKE is case-insensitive
      [`%${query}%`]
    );
    res.json(result.rows);  // Send matching results back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
