import { useEffect, useState } from "react";


interface WakaTimeStats {
  total_time_human_readable: string;
}

interface GitHubStats {
  totalCommits: number;
}

// Interface pour les résultats du hook
interface StatsFetchResult {
  wakatimeStats: WakaTimeStats | null;
  githubStats: GitHubStats | null;
  loading: boolean;
  error: string | null;
}

export function useStatsFetch() {
  const [wakatimeStats, setWakatimeStats] = useState<WakaTimeStats | null>(null);
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        // Fetch Wakatime stats
        const wakatimeResponse = await fetch("/api/wakatime");
        if (!wakatimeResponse.ok) {
          throw new Error("Failed to fetch Wakatime data");
        }
        const wakatimeData = await wakatimeResponse.json();

        // Fetch GitHub stats
        const githubResponse = await fetch("/api/github");
        if (!githubResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const githubData = await githubResponse.json();

        setWakatimeStats(wakatimeData);
        setGithubStats(githubData);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchStats();
}, []);

return { wakatimeStats, githubStats, loading, error };
}
