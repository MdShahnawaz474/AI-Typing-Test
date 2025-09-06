import React from 'react';
import { StatsCardProps } from '../../types';

export const StatsCard = ({ title, value, icon: Icon, color }: StatsCardProps) => (
  <div className="flex flex-col items-center justify-center p-4 rounded-xl glass neon-border">
    <div className={`p-3 rounded-full bg-gradient-to-br ${color} mb-2`}>
      <Icon />
    </div>
    <h3 className="text-sm text-gray-400 font-medium">{title}</h3>
    <p className="text-2xl md:text-3xl font-bold text-white mt-1">{value}</p>
  </div>
);
