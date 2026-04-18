const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cloud.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cloud.html'));
});

app.get('/ai.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ai.html'));
});

app.get('/mobile.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mobile.html'));
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
