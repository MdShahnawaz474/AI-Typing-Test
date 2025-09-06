import React from 'react';
import { RightSidebarProps } from '../../types';
import { StatsCard } from '../ui/StatsCard';
import { Target, Clock } from '../icons/Icons';

export const RightSidebar = ({ accuracy, totalChars, progress, testState }: RightSidebarProps) => (
  <div className="w-72 p-6 flex flex-col justify-center space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gradient mb-2">Performance</h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto" />
    </div>
    
    <StatsCard
      title="Accuracy"
      value={`${accuracy}%`}
      icon={Target}
      color="from-neon-green to-neon-cyan"
    />
    <StatsCard
      title="Characters"
      value={totalChars}
      icon={Clock}
      color="from-neon-purple to-neon-pink"
    />
    
    {/* Additional Info Card */}
    <div className="glass neon-border rounded-xl p-4">
      <h3 className="text-neon-cyan font-medium text-center mb-2">Progress</h3>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">
          {Math.round(progress)}%
        </div>
        <div className="text-sm text-gray-400 mt-1">
          {testState === "running" ? "In Progress" : testState === "finished" ? "Completed" : "Ready"}
        </div>
      </div>
    </div>
  </div>
);
