declare var axios: any;

async function getCommitCount(): Promise<number | null> {
  try {
    const response = await axios.get('https://api.github.com/repos/haptveron/haptveron.github.io/commits', {
      headers: {
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
  const commitCountElement = document.getElementById('commit-count');
  if (commitCount !== null && commitCountElement) {
    commitCountElement.textContent = `Commit Count: ${commitCount}`;
  } else if (commitCountElement) {
    commitCountElement.textContent = 'Error fetching commit count';
  }
}

displayCommitCount();
