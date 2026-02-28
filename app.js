const express = require('express');
const app = express();

const PORT = 3000;
const message = process.env.MESSAGE

// Basic route
app.get('/', (req, res) => {
  res.send(message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
