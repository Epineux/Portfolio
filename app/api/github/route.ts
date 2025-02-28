
export async function GET() {
  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

    if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
      return new Response(JSON.stringify({ error: 'GitHub credentials not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const since = oneWeekAgo.toISOString();

    // Fetch all commits from the user in the last week across all repositories
    const commitsResponse = await fetch(
      `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}+committer-date:>${since}`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.cloak-preview+json',
        },
      }
    );

    if (!commitsResponse.ok) {
      throw new Error(`GitHub API responded with status: ${commitsResponse.status}`);
    }

    const commitsData = await commitsResponse.json();
    const totalCommits = commitsData.total_count;

    return new Response(JSON.stringify({
      totalCommits
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
