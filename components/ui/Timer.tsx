import React from 'react';
import { TimerProps } from '../../types';
import { Clock } from '../icons/Icons';

export const Timer = ({ timer,  }: TimerProps) => (
  <div className="flex flex-col items-center justify-center p-4 rounded-xl glass neon-border">
    <div className="p-3 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple mb-2">
      <Clock />
    </div>
    <h3 className="text-sm text-gray-400 font-medium">Time Left</h3>
    <p className="text-2xl md:text-3xl font-bold text-white mt-1">
      {timer}s
    </p>
  </div>
);
