import React from 'react';

export const AIReviewLoading = () => (
  <div className="glass neon-border rounded-2xl p-8 mt-8 text-center">
    <div className="animate-pulse">
      <div className="text-4xl mb-4">🤖</div>
      <h3 className="text-xl font-bold text-gradient mb-4">AI Analyzing Your Performance...</h3>
      <div className="flex justify-center items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce delay-200"></div>
      </div>
      <p className="text-gray-400">
        Checking grammar, analyzing speed, and preparing personalized feedback...
      </p>
    </div>
  </div>
);
