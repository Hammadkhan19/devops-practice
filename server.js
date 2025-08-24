const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port provided by the environment (e.g., Heroku) or default to 3000

// Define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World! Our CI/CD Pipeline is working!', success: true });
});

// Health check endpoint (very important for production)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app; // Export for testing