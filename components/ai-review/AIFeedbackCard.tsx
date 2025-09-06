// import { AIFeedback } from '@/types/ai-review';
// import React from 'react';

// interface AIFeedbackCardProps {
//   feedback: AIFeedback;
// }

// export const AIFeedbackCard = ({ feedback }: AIFeedbackCardProps) => {
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
//     <div className="glass neon-border rounded-2xl p-8 mt-8">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gradient mb-4">
//           🤖 AI Performance Review
//         </h2>
//         <div className={`text-6xl font-bold ${getScoreColor(feedback.overallScore)} mb-2`}>
//           {feedback.overallScore}/10
//         </div>
//         <p className="text-gray-300">Overall Performance Score</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Typing Analysis */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-bold text-neon-cyan mb-4">📊 Performance Analysis</h3>
          
//           <div className="space-y-3">
//             <div className="flex justify-between items-center p-3 bg-dark-800/50 rounded-lg">
//               <span className="text-gray-300">Speed Rating:</span>
//               <span className={`font-semibold ${getRatingColor(feedback.typingAnalysis.speedRating)}`}>
//                 {feedback.typingAnalysis.speedRating}
//               </span>
//             </div>
            
//             <div className="flex justify-between items-center p-3 bg-dark-800/50 rounded-lg">
//               <span className="text-gray-300">Accuracy Rating:</span>
//               <span className={`font-semibold ${getRatingColor(feedback.typingAnalysis.accuracyRating)}`}>
//                 {feedback.typingAnalysis.accuracyRating}
//               </span>
//             </div>
            
//             <div className="flex justify-between items-center p-3 bg-dark-800/50 rounded-lg">
//               <span className="text-gray-300">Consistency:</span>
//               <span className={`font-semibold ${getRatingColor(feedback.typingAnalysis.consistencyRating)}`}>
//                 {feedback.typingAnalysis.consistencyRating}
//               </span>
//             </div>
//           </div>

//           {/* Recommendations */}
//           <div>
//             <h4 className="text-lg font-semibold text-neon-purple mb-3">💡 Typing Recommendations</h4>
//             <ul className="space-y-2">
//               {feedback.typingAnalysis.recommendations.map((rec, index) => (
//                 <li key={index} className="flex items-start gap-2 text-gray-300">
//                   <span className="text-neon-cyan mt-1">•</span>
//                   {rec}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Errors & Suggestions */}
//         <div className="space-y-6">
//           {/* Grammar Errors */}
//           {feedback.grammarErrors.length > 0 && (
//             <div>
//               <h3 className="text-xl font-bold text-red-400 mb-4">❌ Grammar & Spelling</h3>
//               <div className="space-y-3">
//                 {feedback.grammarErrors.map((error, index) => (
//                   <div key={index} className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="text-red-300 font-mono">{error.error}"</span>
//                       <span className="text-green-300 font-mono">→ "{error.correction}"</span>
//                     </div>
//                     <p className="text-sm text-gray-400">{error.explanation}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Suggestions */}
//           <div>
//             <h3 className="text-xl font-bold text-neon-cyan mb-4">✨ Suggestions</h3>
//             <ul className="space-y-2">
//               {feedback.suggestions.map((suggestion, index) => (
//                 <li key={index} className="flex items-start gap-2 text-gray-300 p-3 bg-blue-900/20 rounded-lg">
//                   <span className="text-neon-cyan mt-1">💡</span>
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* General Improvements */}
//           <div>
//             <h3 className="text-xl font-bold text-neon-purple mb-4">🚀 Next Steps</h3>
//             <ul className="space-y-2">
//               {feedback.improvements.map((improvement, index) => (
//                 <li key={index} className="flex items-start gap-2 text-gray-300">
//                   <span className="text-neon-purple mt-1">→</span>
//                   {improvement}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
