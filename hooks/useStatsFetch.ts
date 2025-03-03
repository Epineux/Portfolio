import { useEffect, useState } from "react";


interface WakaTimeStats {
  total_time_human_readable: string;
  total_time_seconds: number;
}

interface GitHubStats {
  totalCommits: number;
}

export function useStatsFetch() {
  const [wakatimeStats, setWakatimeStats] = useState<WakaTimeStats | null>(
    null
  );
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [coffeeDrinks, setCoffeeDrinks] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        // Fetch Wakatime stats
        const wakatimeResponse = await fetch('/api/wakatime');
        if (!wakatimeResponse.ok) {
          throw new Error('Failed to fetch Wakatime data');
        }
        const wakatimeData = await wakatimeResponse.json();
        console.log(wakatimeData);

        // Fetch GitHub stats
        const githubResponse = await fetch('/api/github');
        if (!githubResponse.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const githubData = await githubResponse.json();

        const coffeeDrinks = +(
          (wakatimeData.total_time_seconds / 20 +
            githubData.totalCommits * 50) /
          100
        ).toFixed(2);

        setWakatimeStats(wakatimeData);
        setGithubStats(githubData);
        setCoffeeDrinks(coffeeDrinks);
      } catch (error: any) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { wakatimeStats, githubStats, coffeeDrinks, loading };
}
