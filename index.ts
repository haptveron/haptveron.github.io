
declare var axios: any;

const githubToken = process.env.TOKEN_GITHUB;

if (!githubToken) {
  console.error('TOKEN_GITHUB is not set');
  process.exit(1);
}


async function getCommitCount(): Promise<number | null> {
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

async function displayCommitCount() {
    try {
      const response = await fetch('http://localhost:3000/commit-count');
      const data = await response.json();
      const commitCountElement = document.getElementById('commit-count');
      if (data.commitCount !== null && commitCountElement) {
        commitCountElement.textContent = `Commit Count: ${data.commitCount}`;
      } else if (commitCountElement) {
        commitCountElement.textContent = 'Error fetching commit count';
      }
    } catch (error) {
      console.error('Error fetching commit data:', error);
    }
  }
  
  displayCommitCount();
  

displayCommitCount();

export default displayCommitCount;