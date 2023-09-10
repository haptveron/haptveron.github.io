require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

const githubToken = process.env.TOKEN_GITHUB; 

app.get('/commit-count', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/repos/haptveron/haptveron.github.io/commits', {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    res.json({ commitCount: response.data.length });
  } catch (error) {
    console.error('Error fetching commit data:', error);
    res.status(500).json({ error: 'Error fetching commit data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
