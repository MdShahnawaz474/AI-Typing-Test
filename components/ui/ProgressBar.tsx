import React from 'react';
import { ProgressBarProps } from '../../types';

export const ProgressBar = ({ progress }: ProgressBarProps) => (
  <div className="w-full h-2 rounded-full bg-dark-700/50 ">
    <div
      className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
);
