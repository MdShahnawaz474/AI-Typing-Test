// import { AIFeedback } from '@/types/ai-review';
// import React, { useState } from 'react';

// interface CompactAIReviewProps {
//   feedback: AIFeedback;
// }

// export const CompactAIReview = ({ feedback }: CompactAIReviewProps) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const getScoreColor = (score: number) => {
//     if (score >= 8) return 'text-green-400';
//     if (score >= 6) return 'text-yellow-400'; 
//     if (score >= 4) return 'text-orange-400';
//     return 'text-red-400';
//   };

//   const getRatingColor = (rating: string) => {
//     switch (rating) {
//       case 'Excellent': return 'text-green-400';
//       case 'Good': return 'text-blue-400';
//       case 'Average': return 'text-yellow-400';
//       case 'Needs Improvement': return 'text-red-400';
//       default: return 'text-gray-400';
//     }
//   };

//   return (
//     <div className="glass neon-border rounded-xl p-4 mt-6">
//       {/* Compact Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <span className="text-2xl">🤖</span>
//             <span className="text-lg font-bold text-gradient">AI Review</span>
//           </div>
//           <div className={`text-2xl font-bold ${getScoreColor(feedback.overallScore)}`}>
//             {feedback.overallScore}/10
//           </div>
//         </div>
        
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="px-3 py-1 rounded-lg bg-neon-purple/20 hover:bg-neon-purple/30 transition-colors text-sm"
//         >
//           {isExpanded ? '📄 Minimize' : '📊 Details'}
//         </button>
//       </div>

//       {/* Quick Stats Bar */}
//       <div className="flex gap-4 mt-4">
//         <div className="flex-1 text-center">
//           <div className={`text-sm ${getRatingColor(feedback.typingAnalysis.speedRating)}`}>
//             {feedback.typingAnalysis.speedRating}
//           </div>
//           <div className="text-xs text-gray-400">Speed</div>
//         </div>
//         <div className="flex-1 text-center">
//           <div className={`text-sm ${getRatingColor(feedback.typingAnalysis.accuracyRating)}`}>
//             {feedback.typingAnalysis.accuracyRating}
//           </div>
//           <div className="text-xs text-gray-400">Accuracy</div>
//         </div>
//         <div className="flex-1 text-center">
//           <div className="text-sm text-neon-cyan">
//             {feedback.grammarErrors.length}
//           </div>
//           <div className="text-xs text-gray-400">Errors</div>
//         </div>
//       </div>

//       {/* Top Suggestion */}
//       {feedback.suggestions.length > 0 && (
//         <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
//           <div className="flex items-start gap-2">
//             <span className="text-blue-400 text-sm">💡</span>
//             <p className="text-sm text-gray-300 leading-relaxed">
//               {feedback.suggestions[0]}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Expanded Details */}
//       {isExpanded && (
//         <div className="mt-4 space-y-4 border-t border-gray-700 pt-4">
//           {/* Grammar Errors */}
//           {feedback.grammarErrors.length > 0 && (
//             <div>
//               <h4 className="text-sm font-semibold text-red-400 mb-2">
//                 ❌ Grammar Issues ({feedback.grammarErrors.length})
//               </h4>
//               <div className="space-y-2">
//                 {feedback.grammarErrors.slice(0, 3).map((error, index) => (
//                   <div key={index} className="text-xs p-2 bg-red-900/20 rounded border border-red-500/30">
//                     <span className="text-red-300 font-mono">"{error.error}"</span>
//                     <span className="text-gray-400 mx-2">→</span>
//                     <span className="text-green-300 font-mono">"{error.correction}"</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Additional Suggestions */}
//           {feedback.suggestions.length > 1 && (
//             <div>
//               <h4 className="text-sm font-semibold text-neon-cyan mb-2">
//                 ✨ More Tips
//               </h4>
//               <ul className="space-y-1">
//                 {feedback.suggestions.slice(1, 3).map((suggestion, index) => (
//                   <li key={index} className="text-xs text-gray-300 flex items-start gap-1">
//                     <span className="text-neon-cyan">•</span>
//                     {suggestion}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Quick Recommendations */}
//           <div>
//             <h4 className="text-sm font-semibold text-neon-purple mb-2">
//               🎯 Next Steps
//             </h4>
//             <ul className="space-y-1">
//               {feedback.typingAnalysis.recommendations.slice(0, 2).map((rec, index) => (
//                 <li key={index} className="text-xs text-gray-300 flex items-start gap-1">
//                   <span className="text-neon-purple">→</span>
//                   {rec}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
