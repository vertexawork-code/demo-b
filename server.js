const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Enable CORS for http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Parse JSON request bodies
app.use(express.json());

// POST /api/chat endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  if (typeof message !== 'string') {
    return res.status(400).json({ error: 'message must be a string' });
  }

  let reply = '';
  if (message === 'hello') {
    reply = 'Hey there! Welcome to Antigravity 🚀';
  } else if (message === 'how are you') {
    reply = 'Floating in orbit, all good up here!';
  } else if (message === 'bye') {
    reply = 'Goodbye! Re-entering atmosphere...';
  } else {
    reply = "Signal received! But I don't understand: " + message;
  }

  return res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
