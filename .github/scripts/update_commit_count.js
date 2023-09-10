const fs = require('fs');
const axios = require('axios');

const githubToken = process.env.TOKEN_GITHUB;

if (!githubToken) {
  console.error('TOKEN_GITHUB is not set');
  process.exit(1);
}

async function getCommitCount() {
  try {
    const response = await axios.get('https://api.github.com/repos/haptveron/haptveron.github.io/commits', {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    return response.data.length;
  } catch (error) {
    console.error('Error fetching commit data:', error);
    return null;
  }
}

async function updateCommitCountFile() {
  const commitCount = await getCommitCount();
  if (commitCount !== null) {
    fs.writeFileSync('public/commit_count.json', JSON.stringify({ commitCount }), 'utf-8');
  }
}

updateCommitCountFile();
