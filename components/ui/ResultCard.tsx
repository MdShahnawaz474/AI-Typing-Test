// import React from 'react';
// import { ResultCardProps } from '../../types';
// import { StatsCard } from './StatsCard';
// import { Zap, Target, Clock } from '../icons/Icons';

// export const ResultCard = ({ wpm, accuracy, totalChars, restart }: ResultCardProps) => (
//   <div className="text-center p-8 rounded-2xl glass neon-border">
//     <h2 className="text-4xl font-bold text-gradient mb-4">Test Complete!</h2>
//     <p className="text-lg text-gray-300 mb-6">
//       You typed at a speed of <span className="text-neon-cyan font-bold">{wpm} WPM</span> with <span className="text-neon-cyan font-bold">{accuracy}%</span> accuracy.
//     </p>
//     <div className="flex justify-center gap-4 mb-8">
//       <StatsCard title="Speed" value={wpm} icon={Zap} color="from-neon-cyan to-neon-blue" />
//       <StatsCard title="Accuracy" value={`${accuracy}%`} icon={Target} color="from-neon-green to-neon-cyan" />
//       <StatsCard title="Characters" value={totalChars} icon={Clock} color="from-neon-purple to-neon-pink" />
//     </div>
//     <button
//       onClick={restart}
//       className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink font-bold text-white hover:scale-105 transition-transform duration-300"
//     >
//       Try Again
//     </button>
//   </div>
// );

import React, { useEffect } from 'react';
import { ResultCardProps } from '../../types';
import { Zap, Target, Clock } from '../icons/Icons';
// import { useOfflineAIReview as useAIReview } from '../../hooks/useOfflineAIReview';
import { ScrollableAIReview } from '../ai-review/ScrollableAIReview';
import { useAIReview } from '@/hooks/useAIReview';

interface ExtendedResultCardProps extends ResultCardProps {
  typedText: string;
  originalText: string;
  completedQuotes: string[];
  timeSpent: number;
}

export const ResultCard = ({ 
  wpm, 
  accuracy, 
  totalChars, 
  restart,
  typedText,
  originalText, 
  completedQuotes,
  timeSpent 
}: ExtendedResultCardProps) => {
  const { feedback, loading, error, generateReview } = useAIReview();

  useEffect(() => {
    if (typedText && totalChars > 0) {
      generateReview(typedText, originalText, wpm, accuracy, completedQuotes, timeSpent);
    }
  }, [typedText, totalChars]);

  return (
    <div className="space-y-4 max-h-screen overflow-y-auto custom-scrollbar">
      {/* Main Results - Compact */}
      <div className="text-center p-4 rounded-2xl glass neon-border">
        <h2 className="text-3xl font-bold text-gradient mb-3 mt-1">🎉 Test Complete!</h2>
        <p className="text-gray-300 mb-4">
          <span className="text-neon-cyan font-bold text-xl">{wpm} WPM</span> • 
          <span className="text-neon-cyan font-bold text-xl">{accuracy}%</span> accuracy
        </p>
        
        {/* Compact Stats Row */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-1">
              <Zap />
            </div>
            <div className="text-lg font-bold text-white">{wpm}</div>
            <div className="text-xs text-gray-400">WPM</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center mb-1">
              <Target />
            </div>
            <div className="text-lg font-bold text-white">{accuracy}%</div>
            <div className="text-xs text-gray-400">Accuracy</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mb-1">
              <Clock />
            </div>
            <div className="text-lg font-bold text-white">{totalChars}</div>
            <div className="text-xs text-gray-400">Characters</div>
          </div>
        </div>
        
        <button
          onClick={restart}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink font-bold text-white hover:scale-105 transition-transform duration-300"
        >
          Try Again
        </button>
      </div>

      {/* AI Review - Scrollable */}
      {loading && (
        <div className="glass neon-border rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce delay-200"></div>
            <span className="ml-2 text-sm text-gray-400">AI analyzing performance...</span>
          </div>
        </div>
      )}
      
      {error && (
        <div className="glass neon-border rounded-xl p-4 text-center">
          <p className="text-red-400 text-sm">⚠️ {error}</p>
        </div>
      )}
      
      {feedback && <ScrollableAIReview feedback={feedback} />}
    </div>
  );
};
