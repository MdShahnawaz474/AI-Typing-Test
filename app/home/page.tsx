// "use client"
// import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// // Inline SVG Icons
// const Zap = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.41-.89L2.83 7.82A2 2 0 0 1 4.5 5h6a2 2 0 0 1 1.67.82l.76 5.29"/><path d="M10.4 17.5a1 1 0 0 0 .8.5H19a2 2 0 0 0 1.67-.82l1.62-11.3a2 2 0 0 0-1.67-2.18H13a2 2 0 0 0-1.67.82L10.4 17.5z"/></svg>
// );
// const Target = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
// );
// const Clock = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
// );

// // Constants
// const QUOTES_SHORT = [
//   "JavaScript makes web pages interactive.",
//   "Typing fast is a useful skill.",
//   "Frontend development is fun to learn.",
//   "TypeScript enables safer web apps.",
//   "React hooks simplify state management.",
// ];

// const QUOTES_LONG = [
//   "The rapid evolution of technology has transformed the way we work, communicate, and solve complex problems in our interconnected world.",
//   "Artificial intelligence and machine learning algorithms are revolutionizing industries by automating processes, analyzing vast datasets, and providing insights that drive innovation and efficiency.",
//   "Modern web development requires mastery of multiple programming languages, frameworks, and tools to create responsive, scalable, and user-friendly applications that meet diverse business requirements.",
//   "Cloud computing platforms enable developers to deploy, scale, and manage applications globally while reducing infrastructure costs and improving reliability through distributed systems and microservices architecture.",
//   "Cybersecurity has become paramount as digital transformation accelerates, requiring robust encryption, authentication protocols, and continuous monitoring to protect sensitive data and maintain user trust.",
//   "The future of software engineering lies in collaborative development practices, continuous integration, automated testing, and agile methodologies that enable teams to deliver high-quality solutions rapidly.",
// ];

// const DURATIONS = [15, 30, 60];

// // Define a type for the hook's props to fix TypeScript errors.
// interface UseTypingTestProps {
//   quotes: string[];
//   durations: number[];
// }

// // Custom Hook to handle the typing test logic
// // const useTypingTest = ({ quotes, durations }: UseTypingTestProps) => {
// //   type TestState = "idle" | "running" | "finished";
// //   const [testState, setTestState] = useState<TestState>("idle");
// //   const [input, setInput] = useState<string>("");
// //   const [quote, setQuote] = useState<string>("");
// //   const [wpm, setWpm] = useState<number>(0);
// //   const [accuracy, setAccuracy] = useState<number>(0);
// //   const [timer, setTimer] = useState<number>(0);
// //   const [totalChars, setTotalChars] = useState<number>(0);
// //   const [selectedDuration, setSelectedDuration] = useState<number>(durations[0]);
// //   const intervalRef = useRef<number | null>(null);

// //   const currentQuotes = selectedDuration === 60 ? QUOTES_LONG : quotes;

// //   const startTest = useCallback(() => {
// //     setTestState("running");
// //     setTimer(selectedDuration);
// //     setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
// //     intervalRef.current = window.setInterval(() => {
// //       setTimer((prevTimer) => {
// //         if (prevTimer <= 1) {
// //           endTest();
// //           return 0;
// //         }
// //         return prevTimer - 1;
// //       });
// //     }, 1000);
// //   }, [selectedDuration, currentQuotes]);

// //   const endTest = useCallback(() => {
// //     if (intervalRef.current !== null) {
// //       clearInterval(intervalRef.current);
// //     }
// //     setTestState("finished");
// //     const typedWords = input.split(' ').filter(word => word.length > 0);
// //     const numCorrectChars = typedWords.reduce((sum, word, index) => {
// //       let charCount = 0;
// //       const quoteWord = quote.split(' ')[index];
// //       if (quoteWord) {
// //         for (let i = 0; i < word.length; i++) {
// //           if (word[i] === quoteWord[i]) {
// //             charCount++;
// //           }
// //         }
// //       }
// //       return sum + charCount;
// //     }, 0);

// //     const minutes = selectedDuration / 60;
// //     const finalWpm = Math.round((numCorrectChars / 5) / minutes);
// //     const finalAccuracy = Math.round((numCorrectChars / input.length) * 100) || 0;
    
// //     setWpm(finalWpm);
// //     setAccuracy(finalAccuracy);
// //   }, [input, quote, selectedDuration]);

// //   const restart = useCallback(() => {
// //     if (intervalRef.current !== null) {
// //       clearInterval(intervalRef.current);
// //     }
// //     setTestState("idle");
// //     setInput("");
// //     setWpm(0);
// //     setAccuracy(0);
// //     setTotalChars(0);
// //     setTimer(selectedDuration);
// //   }, [selectedDuration]);

// //   const handleInputChange = (value: string) => {
// //     if (testState === "idle") {
// //       startTest();
// //     }
// //     setInput(value);
// //     setTotalChars(value.length);
    
// //     // Calculate WPM and Accuracy in real-time
// //     const typedWords = value.split(' ').filter(word => word.length > 0);
// //     const correctChars = typedWords.reduce((sum, word, index) => {
// //       let charCount = 0;
// //       const quoteWord = quote.split(' ')[index];
// //       if (quoteWord) {
// //         for (let i = 0; i < word.length; i++) {
// //           if (word[i] === quoteWord[i]) {
// //             charCount++;
// //           }
// //         }
// //       }
// //       return sum + charCount;
// //     }, 0);
    
// //     const timeElapsed = selectedDuration - timer;
// //     if (timeElapsed > 0) {
// //       const calculatedWPM = Math.round((correctChars / 5) / (timeElapsed / 60));
// //       setWpm(calculatedWPM);
// //       setAccuracy(Math.round((correctChars / value.length) * 100) || 0);
// //     }
// //   };
  
// //   useEffect(() => {
// //     if (testState === "idle" || testState === "finished") {
// //       setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
// //     }
// //   }, [testState, selectedDuration]);

// //   return {
// //     quote,
// //     input,
// //     setInput: handleInputChange,
// //     wpm,
// //     accuracy,
// //     timer,
// //     testState,
// //     endTest,
// //     restart,
// //     selectedDuration,
// //     setSelectedDuration,
// //     totalChars,
// //     durations,
// //   };
// // };

// const useTypingTest = ({ quotes, durations }: UseTypingTestProps) => {
//   type TestState = "idle" | "running" | "finished";
//   const [testState, setTestState] = useState<TestState>("idle");
//   const [input, setInput] = useState<string>("");
//   const [quote, setQuote] = useState<string>("");
//   const [wpm, setWpm] = useState<number>(0);
//   const [accuracy, setAccuracy] = useState<number>(0);
//   const [timer, setTimer] = useState<number>(0);
//   const [totalChars, setTotalChars] = useState<number>(0);
//   const [selectedDuration, setSelectedDuration] = useState<number>(durations[0]);
//   const intervalRef = useRef<number | null>(null);

//   // ✅ Fix 1: Use useMemo to stabilize currentQuotes reference
//   const currentQuotes = useMemo(() => {
//     return selectedDuration === 60 ? QUOTES_LONG : quotes;
//   }, [selectedDuration, quotes]);

//   // ✅ Fix 2: Initialize quote on mount
//   useEffect(() => {
//     if (!quote) {
//       setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
//     }
//   }, [currentQuotes, quote]);

//   const startTest = useCallback(() => {
//     setTestState("running");
//     setTimer(selectedDuration);
//     // ✅ Fix 3: Don't change quote when starting - keep the displayed one
//     intervalRef.current = window.setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer <= 1) {
//           endTest();
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);
//   }, [selectedDuration]); // Remove currentQuotes from dependencies

//   const endTest = useCallback(() => {
//     if (intervalRef.current !== null) {
//       clearInterval(intervalRef.current);
//     }
//     setTestState("finished");
//     const typedWords = input.split(' ').filter(word => word.length > 0);
//     const numCorrectChars = typedWords.reduce((sum, word, index) => {
//       let charCount = 0;
//       const quoteWord = quote.split(' ')[index];
//       if (quoteWord) {
//         for (let i = 0; i < word.length; i++) {
//           if (word[i] === quoteWord[i]) {
//             charCount++;
//           }
//         }
//       }
//       return sum + charCount;
//     }, 0);

//     const minutes = selectedDuration / 60;
//     const finalWpm = Math.round((numCorrectChars / 5) / minutes);
//     const finalAccuracy = Math.round((numCorrectChars / input.length) * 100) || 0;
    
//     setWpm(finalWpm);
//     setAccuracy(finalAccuracy);
//   }, [input, quote, selectedDuration]);

//   const restart = useCallback(() => {
//     if (intervalRef.current !== null) {
//       clearInterval(intervalRef.current);
//     }
//     setTestState("idle");
//     setInput("");
//     setWpm(0);
//     setAccuracy(0);
//     setTotalChars(0);
//     setTimer(selectedDuration);
//     // ✅ Fix 4: Set new quote only when restarting
//     setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
//   }, [selectedDuration, currentQuotes]);

//   const handleInputChange = (value: string) => {
//     if (testState === "idle") {
//       startTest();
//     }
//     setInput(value);
//     setTotalChars(value.length);
    
//     // Calculate WPM and Accuracy in real-time
//     const typedWords = value.split(' ').filter(word => word.length > 0);
//     const correctChars = typedWords.reduce((sum, word, index) => {
//       let charCount = 0;
//       const quoteWord = quote.split(' ')[index];
//       if (quoteWord) {
//         for (let i = 0; i < word.length; i++) {
//           if (word[i] === quoteWord[i]) {
//             charCount++;
//           }
//         }
//       }
//       return sum + charCount;
//     }, 0);
    
//     const timeElapsed = selectedDuration - timer;
//     if (timeElapsed > 0) {
//       const calculatedWPM = Math.round((correctChars / 5) / (timeElapsed / 60));
//       setWpm(calculatedWPM);
//       setAccuracy(Math.round((correctChars / value.length) * 100) || 0);
//     }
//   };

//   // ✅ Fix 5: Remove the problematic useEffect that was changing quotes during typing
//   // Quote changes are now handled in restart() and initial mount only

//   return {
//     quote,
//     input,
//     setInput: handleInputChange,
//     wpm,
//     accuracy,
//     timer,
//     testState,
//     endTest,
//     restart,
//     selectedDuration,
//     setSelectedDuration,
//     totalChars,
//     durations,
//   };
// };

// // Define types for component props
// interface StatsCardProps {
//   title: string;
//   value: string | number;
//    icon: () => React.ReactElement;
//   color: string;
// }

// interface ProgressBarProps {
//   progress: number;
// }

// interface TimerProps {
//   timer: number;
//   testState: "idle" | "running" | "finished";
// }

// interface ResultCardProps {
//   wpm: number;
//   accuracy: number;
//   totalChars: number;
//   restart: () => void;
// }


// // Sub-components to keep the main App component clean
// const StatsCard = ({ title, value, icon: Icon, color }: StatsCardProps) => (
//   <div className={`flex flex-col items-center justify-center p-4 rounded-xl glass neon-border`}>
//     <div className={`p-3 rounded-full bg-gradient-to-br ${color} mb-2`}>
//       <Icon />
//     </div>
//     <h3 className="text-sm text-gray-400 font-medium">{title}</h3>
//     <p className="text-2xl md:text-3xl font-bold text-white mt-1">{value}</p>
//   </div>
// );

// const ProgressBar = ({ progress }: ProgressBarProps) => (
//   <div className="w-full h-2 rounded-full bg-dark-700/50 mb-8">
//     <div
//       className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 ease-out"
//       style={{ width: `${progress}%` }}
//     />
//   </div>
// );

// const Timer = ({ timer, testState }: TimerProps) => (
//   <div className={`flex flex-col items-center justify-center p-4 rounded-xl glass neon-border`}>
//     <div className={`p-3 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple mb-2`}>
//       <Clock />
//     </div>
//     <h3 className="text-sm text-gray-400 font-medium">Time Left</h3>
//     <p className="text-2xl md:text-3xl font-bold text-white mt-1">
//       {timer}s
//     </p>
//   </div>
// );

// const ResultCard = ({ wpm, accuracy, totalChars, restart }: ResultCardProps) => (
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

// // Main Application Component
// const App = () => {
//   const hookResult = useTypingTest({
//     quotes: QUOTES_SHORT,
//     durations: DURATIONS
//   });

//   const {
//     quote,
//     input,
//     setInput,
//     wpm,
//     accuracy,
//     timer,
//     testState,
//     endTest,
//     restart,
//     selectedDuration,
//     setSelectedDuration,
//     totalChars,
//     durations,
//   } = hookResult;

//   const handleDurationChange = (newDuration: number) => {
//     setSelectedDuration(newDuration);
//     restart();
//   };

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
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

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
//       endTest();
//     }
//   };

//   const progress = (selectedDuration - timer) / selectedDuration * 100;

//   return (
//     <div className="min-h-screen bg-dark-900 text-white font-inter overflow-hidden">
//       <style>
//         {`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 15s ease infinite;
//         }
//         @keyframes glow {
//           0%, 100% { text-shadow: 0 0 5px rgba(0,245,255,0.3); }
//           50% { text-shadow: 0 0 10px rgba(0,245,255,0.6); }
//         }
//         .animate-glow {
//           animation: glow 2s ease-in-out infinite;
//         }
//         .text-gradient {
//           background-image: linear-gradient(to right, #00F5FF, #8A2BE2);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         .neon-border {
//           box-shadow: 0 0 15px rgba(0, 245, 255, 0.2), 0 0 10px rgba(138, 43, 226, 0.2);
//         }
//         .glass {
//           background-color: rgba(30, 30, 45, 0.7);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//         }
//         `}
//       </style>
      
//       <div className="relative z-10 h-screen flex">
//         {/* Left Sidebar - Stats */}
//         <div className="w-72 p-6 flex flex-col justify-center space-y-6">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-gradient mb-2">Live Stats</h2>
//             <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
//           </div>
          
//           <Timer timer={timer} testState={testState} />
//           <StatsCard
//             title="Speed (WPM)"
//             value={wpm}
//             icon={Zap}
//             color="from-neon-cyan to-neon-blue"
//           />
          
//           {/* Duration Selector */}
//           <div className="glass neon-border rounded-xl p-4">
//             <label className="text-neon-cyan font-medium block mb-2 text-center ">Test Duration</label>
//             <select
//               value={selectedDuration}
//               onChange={(e) => handleDurationChange(Number(e.target.value))}
//               className="w-full bg-dark-800/50 border border-neon-purple/30 rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-neon-cyan/50 transition-all duration-300"
//               disabled={testState === "running"}
//             >
//               {DURATIONS.map((dur) => (
//                 <option key={dur} value={dur} className="bg-black text-blue-500">
//                   {dur}s {dur === 60 ? '(Extended)' : ''}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Center Content */}
//         <div className="flex-1 p-6 flex flex-col justify-center max-w-4xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-glow">
//               ⚡ Typing Speed AI Test
//             </h1>
//             <p className="text-lg text-gray-400 mb-4">
//               Test your speed. Track your accuracy. Level up.
//             </p>
//             <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto" />
//           </div>

//           {/* Progress Bar */}
//           <ProgressBar progress={progress} />

//           {/* Main Content Area */}
//           {testState !== "finished" ? (
//             <div className="glass neon-border rounded-2xl p-6 relative overflow-hidden">
//               <div className="relative z-10 mb-6 p-6 rounded-xl bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-neon-blue/20">
//                 <div className="text-xl font-mono leading-relaxed flex flex-wrap gap-2">
//                   {quoteWords.map((word, idx) => (
//                     <span
//                       key={idx}
//                       className={`transition-all duration-200 px-1 py-0.5 rounded ${getWordStyle(word, inputWords[idx])}`}
//                     >
//                       {word}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <textarea
//                 ref={textareaRef}
//                 className={`w-full bg-dark-800/50 border-2 rounded-xl p-4 text-lg font-mono resize-none transition-all duration-300 cursor-text focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,245,255,0.3)] outline-none border-neon-purple/30 hover:border-neon-purple/50`}
//                 rows={4}
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 // disabled={testState === "finished"}
//                 placeholder={testState === "idle" ? "Click here and start typing to begin..." : "Keep typing..."}
//                 spellCheck={false}
//                 autoComplete="off"
//               />
//             </div>
//           ) : (
//             <div className="text-center p-8 rounded-2xl glass neon-border">
//               <h2 className="text-4xl font-bold text-gradient mb-4">Test Complete!</h2>
//               <p className="text-lg text-gray-300 mb-6">
//                 You typed at a speed of <span className="text-neon-cyan font-bold">{wpm} WPM</span> with <span className="text-neon-cyan font-bold">{accuracy}%</span> accuracy.
//               </p>
//               <button
//                 onClick={restart}
//                 className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink font-bold text-white hover:scale-105 transition-transform duration-300"
//               >
//                 Try Again
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Right Sidebar - Stats */}
//         <div className="w-72 p-6 flex flex-col justify-center space-y-6">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-gradient mb-2">Performance</h2>
//             <div className="w-16 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto" />
//           </div>
          
//           <StatsCard
//             title="Accuracy"
//             value={`${accuracy}%`}
//             icon={Target}
//             color="from-neon-green to-neon-cyan"
//           />
//           <StatsCard
//             title="Characters"
//             value={totalChars}
//             icon={Clock}
//             color="from-neon-purple to-neon-pink"
//           />
          
//           {/* Additional Info Card */}
//           <div className="glass neon-border rounded-xl p-4">
//             <h3 className="text-neon-cyan font-medium text-center mb-2">Progress</h3>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-white">
//                 {Math.round(progress)}%
//               </div>
//               <div className="text-sm text-gray-400 mt-1">
//                 {testState === "running" ? "In Progress" : testState === "finished" ? "Completed" : "Ready"}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


"use client";
import { TypingTest } from '@/components/TypingTest';
import '../globals.css';

export default function App() {
  return <TypingTest />;
}
