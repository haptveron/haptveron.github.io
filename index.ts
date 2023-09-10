import axios from 'axios';

async function getCommitCount(): Promise<number | null> {
  try {
    const response = await axios.get('https://api.github.com/repos/USERNAME/REPO_NAME/commits', {
      headers: {
        'Authorization': 'token YOUR_GITHUB_TOKEN',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    return response.data.length;
  } catch (error) {
    console.error('Error fetching commit data:', error);
    return null;
  }
}

async function displayCommitCount() {
  const commitCount = await getCommitCount();
  if (commitCount !== null) {
    console.log(`Commit Count: ${commitCount}`);
  }
}

displayCommitCount();
