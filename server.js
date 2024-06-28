const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes by serving the index.html file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof URIError) {
    console.error('Failed to decode URL:', req.url);
    res.status(400).send('Bad Request');
  } else {
    next(err);
  }
});

// Create HTTP server
http.createServer(app).listen(80, function() {
  console.log('HTTP Server is running on port 80');
});
