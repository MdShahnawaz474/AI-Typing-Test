import { AIFeedback } from '@/types/ai-review';
import React from 'react';

interface ScrollableAIReviewProps {
  feedback: AIFeedback;
}

export const ScrollableAIReview = ({ feedback }: ScrollableAIReviewProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-400';
    if (score >= 6) return 'text-yellow-400';
    if (score >= 4) return 'text-orange-400';
    return 'text-red-400';
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent': return 'text-green-400';
      case 'Good': return 'text-blue-400';
      case 'Average': return 'text-yellow-400';
      case 'Needs Improvement': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreEmoji = (score: number) => {
    if (score >= 9) return "🏆";
    if (score >= 7) return "🎉";
    if (score >= 5) return "👍";
    if (score >= 3) return "📈";
    return "💪";
  };

  return (
    <div className="glass neon-border rounded-xl overflow-hidden mt-4 ">
      {/* Fixed Header */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{getScoreEmoji(feedback.overallScore)}</span>
            <div>
              <h3 className="text-xl font-bold text-gradient">AI Performance Review</h3>
             
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="text-right text-sm">
             <div className={`text-2xl font-bold ${getScoreColor(feedback.overallScore)}`}>
                {feedback.overallScore}/10
              </div>
            <div className="text-gray-400">Speed: <span className={getRatingColor(feedback.typingAnalysis.speedRating)}>{feedback.typingAnalysis.speedRating}</span></div>
           
            <div className="text-gray-400">Errors: <span className="text-red-400">{feedback.grammarErrors.length}</span></div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className=" overflow-y-auto p-4 space-y-4 ">
        
        {/* Grammar Errors Section */}
        {feedback.grammarErrors.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
              <span>❌</span> Grammar & Spelling Issues ({feedback.grammarErrors.length})
            </h4>
            <div className="space-y-3">
              {feedback.grammarErrors.map((error, index) => (
                <div key={index} className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-red-500/20 rounded text-red-300 font-mono text-sm">
                      &quot;{error.error}&quot;
                    </span>
                    <span className="text-gray-400">→</span>
                    <span className="px-2 py-1 bg-green-500/20 rounded text-green-300 font-mono text-sm">
                      &quot;{error.correction}&quot;
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {error.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggestions Section */}
        {feedback.suggestions.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <span>💡</span> Improvement Suggestions
            </h4>
            <div className="space-y-2">
              {feedback.suggestions.map((suggestion, index) => (
                <div key={index} className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 text-sm mt-0.5">•</span>
                    <p className="text-sm text-gray-300 leading-relaxed flex-1">
                      {suggestion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Typing Recommendations */}
        {feedback.typingAnalysis.recommendations.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-neon-purple mb-3 flex items-center gap-2">
              <span>🎯</span> Typing Recommendations
            </h4>
            <div className="space-y-2">
              {feedback.typingAnalysis.recommendations.map((rec, index) => (
                <div key={index} className="p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <span className="text-neon-purple text-sm mt-0.5">→</span>
                    <p className="text-sm text-gray-300 leading-relaxed flex-1">
                      {rec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Analysis */}
        <div>
          <h4 className="text-lg font-semibold text-neon-cyan mb-3 flex items-center gap-2">
            <span>📊</span> Performance Breakdown
          </h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex justify-between items-center p-3 bg-dark-800/50 rounded-lg">
              <span className="text-gray-300">Speed Rating</span>
              <span className={`font-semibold ${getRatingColor(feedback.typingAnalysis.speedRating)}`}>
                {feedback.typingAnalysis.speedRating}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-dark-800/50 rounded-lg">
              <span className="text-gray-300">Accuracy Rating</span>
              <span className={`font-semibold ${getRatingColor(feedback.typingAnalysis.accuracyRating)}`}>
                {feedback.typingAnalysis.accuracyRating}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-dark-800/50 rounded-lg">
              <span className="text-gray-300">Consistency</span>
              <span className={`font-semibold ${getRatingColor(feedback.typingAnalysis.consistencyRating)}`}>
                {feedback.typingAnalysis.consistencyRating}
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        {feedback.improvements && feedback.improvements.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-neon-green mb-3 flex items-center gap-2">
              <span>🚀</span> Next Steps
            </h4>
            <div className="space-y-2">
              {feedback.improvements.map((improvement, index) => (
                <div key={index} className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <span className="text-neon-green text-sm mt-0.5">✓</span>
                    <p className="text-sm text-gray-300 leading-relaxed flex-1">
                      {improvement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
