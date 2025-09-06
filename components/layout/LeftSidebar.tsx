import React from 'react';
import { LeftSidebarProps } from '../../types';
import { Timer } from '../ui/Timer';
import { StatsCard } from '../ui/StatsCard';
import { Zap } from '../icons/Icons';
import { DURATIONS } from '../../constants';

export const LeftSidebar = ({ 
  timer, 
  testState, 
  wpm, 
  selectedDuration, 
  // durations, 
  onDurationChange 
}: LeftSidebarProps) => (
  <div className="w-72 p-6 flex flex-col justify-center space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gradient mb-2">Live Stats</h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
    </div>
    
    <Timer timer={timer} testState={testState} />
    <StatsCard
      title="Speed (WPM)"
      value={wpm}
      icon={Zap}
      color="from-neon-cyan to-neon-blue"
    />
    
    {/* Duration Selector */}
    <div className="glass neon-border rounded-xl p-4">
      <label className="text-neon-cyan font-medium block mb-2 text-center">Test Duration</label>
      <select
        value={selectedDuration}
        onChange={(e) => onDurationChange(Number(e.target.value))}
        className="w-full bg-dark-800/50 border border-neon-purple/30 rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-neon-cyan/50 transition-all duration-300"
        disabled={testState === "running"}
      >
        {DURATIONS.map((dur) => (
          <option key={dur} value={dur} className="bg-black text-blue-500">
            {dur}s {dur === 60 ? '(Extended)' : ''}
          </option>
        ))}
      </select>
    </div>
  </div>
);
