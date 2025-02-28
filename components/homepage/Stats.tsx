'use client'

import { useStatsFetch } from '@/hooks/useStatsFetch';

const Stats = () => {

  const { wakatimeStats, githubStats, loading, error } = useStatsFetch();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">Stats</h2>
        <p className="text-white/80">Wakatime: {wakatimeStats?.total_time_human_readable} lines</p>
        <p className="text-white/80">GitHub: {githubStats?.totalCommits} commits</p>
      </div>
    </div>
  )
}
export default Stats
