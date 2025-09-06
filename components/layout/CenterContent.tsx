

// "use client";
// import React, { useRef, useEffect } from 'react';
// import { CenterContentProps } from '../../types';
// import { ProgressBar } from '../ui/ProgressBar';
// import { ResultCard } from '../ui/ResultCard';

// export const CenterContent = ({
//   quote,
//   input,
//   setInput,
//   wpm,
//   accuracy,
//   totalChars,
//   testState,
//   progress,
//   onEndTest,
//   onRestart,
//   completedQuotes = [], // ✅ New prop
// }: CenterContentProps) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   const getWordStyle = (word: string, inputWord: string) => {
//     if (inputWord === undefined) {
//       return "text-gray-500";
//     } else if (inputWord === word) {
//       return "text-neon-cyan";
//     } else {
//       return "text-red-400 bg-red-400/10";
//     }
//   };

//   const quoteWords = quote.split(" ");
//   const inputWords = input.split(" ");

//   useEffect(() => {
//     if (testState !== "finished" && textareaRef.current) {
//       const timer = setTimeout(() => {
//         textareaRef.current?.focus();
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [testState, quote]);

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       onEndTest();
//     }
//   };

//   return (
//     <div className="flex-1 p-6 flex flex-col justify-center max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-glow">
//           ⚡ Typing Speed AI Test
//         </h1>
//         <p className="text-lg text-gray-400 mb-4">
//           Test your speed. Track your accuracy. Level up.
//         </p>
//         <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto" />
//       </div>

//       {/* Progress Bar */}
//       <ProgressBar progress={progress} />

//       {/* Main Content Area */}
//       {testState !== "finished" ? (
//         <div className="glass neon-border rounded-2xl p-6 relative overflow-hidden">
//           {/* ✅ Show completed quotes */}
//           {completedQuotes.length > 0 && (
//             <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-green-800/20 to-green-600/20 border border-green-500/30">
//               <div className="text-sm text-green-400 mb-2">Completed ({completedQuotes.length}):</div>
//               <div className="text-sm text-green-300 font-mono opacity-70">
//                 {completedQuotes.slice(-2).map((completedQuote, idx) => (
//                   <div key={idx} className="mb-1 truncate">
//                     "{completedQuote}"
//                   </div>
//                 ))}
//                 {completedQuotes.length > 2 && (
//                   <div className="text-xs text-green-500">... and {completedQuotes.length - 2} more</div>
//                 )}
//               </div>
//             </div>
//           )}
          
//           {/* Current Quote */}
//           <div className="relative z-10 mb-6 p-6 rounded-xl bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-neon-blue/20">
//             <div className="text-sm text-neon-cyan mb-3">
//               Current Text {completedQuotes.length > 0 && `(#${completedQuotes.length + 1})`}:
//             </div>
//             <div className="text-xl font-mono leading-relaxed flex flex-wrap gap-2">
//               {quoteWords.map((word, idx) => (
//                 <span
//                   key={idx}
//                   className={`transition-all duration-200 px-1 py-0.5 rounded ${getWordStyle(word, inputWords[idx])}`}
//                 >
//                   {word}
//                 </span>
//               ))}
//             </div>
//           </div>
          
//           <textarea
//             ref={textareaRef}
//             className="w-full bg-dark-800/50 border-2 rounded-xl p-4 text-lg font-mono resize-none transition-all duration-300 cursor-text focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,245,255,0.3)] outline-none border-neon-purple/30 hover:border-neon-purple/50"
//             rows={4}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder={testState === "idle" ? "Click here and start typing to begin..." : "Keep typing..."}
//             spellCheck={false}
//             autoComplete="off"
//           />
          
//           {/* ✅ Progress indicator */}
//           <div className="mt-4 text-center text-sm text-gray-400">
//             {testState === "running" && (
//               <>
//                 Completed: {completedQuotes.length} paragraphs • 
//                 Characters: {totalChars} • 
//                 Keep typing until time runs out!
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <ResultCard
//           wpm={wpm}
//           accuracy={accuracy}
//           totalChars={totalChars}
//           restart={onRestart}
//         />
//       )}

//     </div>
//   );
// };


"use client";
import React, { useRef, useEffect } from 'react';
import { CenterContentProps } from '../../types';
import { ProgressBar } from '../ui/ProgressBar';
import { ResultCard } from '../ui/ResultCard';

export const CenterContent = ({
  quote,
  input,
  setInput,
  wpm,
  accuracy,
  totalChars,
  testState,
  progress,
  onEndTest,
  onRestart,
  completedQuotes = [],
  allTypedText = "", // ✅ New prop with default
  timeSpent = 0, // ✅ New prop with default
}: CenterContentProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getWordStyle = (word: string, inputWord: string) => {
    if (inputWord === undefined) {
      return "text-gray-500";
    } else if (inputWord === word) {
      return "text-neon-cyan";
    } else {
      return "text-red-400 bg-red-400/10";
    }
  };

  const quoteWords = quote.split(" ");
  const inputWords = input.split(" ");

  useEffect(() => {
    if (testState !== "finished" && textareaRef.current) {
      const timer = setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [testState, quote]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onEndTest();
    }
  };

  // ✅ Prepare data for AI review
  const typedText = allTypedText + input;
  const originalText = [...completedQuotes, quote].join(" ");

  return (
    <div className="flex-1 p-6 flex flex-col justify-center max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-glow">
          ⚡ Typing Speed AI Test
        </h1>
        <p className="text-lg text-gray-400 mb-2">
          Test your speed. Track your accuracy. Level up.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto" />
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={progress} />

      {/* Main Content Area */}
      {testState !== "finished" ? (
        <div className="glass neon-border rounded-2xl p-6 relative overflow-hidden">
          {/* ✅ Show completed quotes */}
          {completedQuotes.length > 0 && (
            <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-green-800/20 to-green-600/20 border border-green-500/30">
              <div className="text-sm text-green-400 mb-2">Completed ({completedQuotes.length}):</div>
              <div className="text-sm text-green-300 font-mono opacity-70">
                {completedQuotes.slice(-2).map((completedQuote, idx) => (
                  <div key={idx} className="mb-1 truncate">
                    &quot;{completedQuote}&quot;
                  </div>
                ))}
                {completedQuotes.length > 2 && (
                  <div className="text-xs text-green-500">... and {completedQuotes.length - 2} more</div>
                )}
              </div>
            </div>
          )}
          
          {/* Current Quote */}
          <div className="relative z-10 mb-6 p-6 rounded-xl bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-neon-blue/20">
            <div className="text-sm text-neon-cyan mb-3">
              Current Text {completedQuotes.length > 0 && `(#${completedQuotes.length + 1})`}:
            </div>
            <div className="text-xl font-mono leading-relaxed flex flex-wrap gap-2">
              {quoteWords.map((word, idx) => (
                <span
                  key={idx}
                  className={`transition-all duration-200 px-1 py-0.5 rounded ${getWordStyle(word, inputWords[idx])}`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          
          <textarea
            ref={textareaRef}
            className="w-full bg-dark-800/50 border-2 rounded-xl p-4 text-lg font-mono resize-none transition-all duration-300 cursor-text focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,245,255,0.3)] outline-none border-neon-purple/30 hover:border-neon-purple/50"
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={testState === "idle" ? "Click here and start typing to begin..." : "Keep typing..."}
            spellCheck={false}
            autoComplete="off"
          />
          
          {/* ✅ Progress indicator */}
          <div className="mt-4 text-center text-sm text-gray-400">
            {testState === "running" && (
              <>
                Completed: {completedQuotes.length} paragraphs • 
                Characters: {totalChars} • 
                Keep typing until time runs out!
              </>
            )}
          </div>
        </div>
      ) : (
        <ResultCard
          wpm={wpm}
          accuracy={accuracy}
          totalChars={totalChars}
          restart={onRestart}
          // ✅ Add the missing props for AI review
          typedText={typedText}
          originalText={originalText}
          completedQuotes={completedQuotes}
          timeSpent={timeSpent}
        />
      )}
    </div>
  );
};
