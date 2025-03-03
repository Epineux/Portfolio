'use client'


import { useStatsFetch } from '@/hooks/useStatsFetch';
import { Clock5, Coffee, GitBranchPlus } from 'lucide-react';
import StatsItem from './StatsItem';

const Stats = () => {
  const { wakatimeStats, githubStats, coffeeDrinks, loading } = useStatsFetch();
  const stats = [
    {
      text: '',
      icon: (
        <Clock5 className="xl:w-14 xl:h-14 lg:mb-1 lg:w-12 lg:h-12 h-10 w-10" />
      ),
      value: wakatimeStats?.total_time_human_readable || '0h 0m',
      subText: 'Coding time',
    },
    {
      text: 'Commits',
      icon: (
        <GitBranchPlus className="xl:w-14 xl:h-14 lg:mb-1 lg:w-12 lg:h-12 h-10 w-10" />
      ),
      value: githubStats?.totalCommits || 0,
      subText: 'Pushed to GitHub',
    },
    {
      text: 'Coffees',
      icon: (
        <Coffee className="xl:w-14 xl:h-14 lg:mb-1 lg:w-12 lg:h-12 h-10 w-10" />
      ),
      value: coffeeDrinks || 0,
      subText: 'Coffee drinks',
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-xl mb-2xl xl:ml-12 lg:ml-8 text-accent text-center lg:text-left">
        This Week :
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {stats.map((stat, index) => (
          <StatsItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};
export default Stats
