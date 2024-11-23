// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Import comments data
const comments = require('./comments.json');

// GET method to return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST method to add a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.json({ status: 'success', message: 'Comment added successfully' });
});

// PUT method to update a comment
app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  comments[id] = comment;
  res.json({ status: 'success', message: 'Comment updated successfully' });
});

// DELETE method to delete a comment
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments.splice(id, 1);
  res.json({ status: 'success', message: 'Comment deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});