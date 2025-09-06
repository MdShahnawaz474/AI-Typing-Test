// import { useState, useRef, useCallback, useMemo, useEffect } from "react";
// // import { TestState, UseTypingTestProps } from "../types";
// import { QUOTES_LONG } from "../constants";
// import { TestState, UseTypingTestProps } from "@/types/index";

// export const useTypingTest = ({ quotes, durations }: UseTypingTestProps) => {
//   const [testState, setTestState] = useState<TestState>("idle");
//   const [input, setInput] = useState<string>("");
//   const [quote, setQuote] = useState<string>("");
//   const [wpm, setWpm] = useState<number>(0);
//   const [accuracy, setAccuracy] = useState<number>(0);
//   const [timer, setTimer] = useState<number>(0);
//   const [totalChars, setTotalChars] = useState<number>(0);
//   const [selectedDuration, setSelectedDuration] = useState<number>(durations[0]);
//   const intervalRef = useRef<number | null>(null);

//   const currentQuotes = useMemo(() => {
//     return selectedDuration === 60 ? QUOTES_LONG : quotes;
//   }, [selectedDuration, quotes]);

//   useEffect(() => {
//     if (!quote) {
//       setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
//     }
//   }, [currentQuotes, quote]);

//   const startTest = useCallback(() => {
//     setTestState("running");
//     setTimer(selectedDuration);
//     intervalRef.current = window.setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer <= 1) {
//           endTest();
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);
//   }, [selectedDuration]);

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
//     setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
//   }, [selectedDuration, currentQuotes]);

//   const handleInputChange = (value: string) => {
//     if (testState === "idle") {
//       startTest();
//     }
//     setInput(value);
//     setTotalChars(value.length);
    
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



// import { useState, useRef, useCallback, useMemo, useEffect } from "react";
// import { TestState, UseTypingTestProps } from "../types";
// import { QUOTES_LONG } from "../constants";

// export const useTypingTest = ({ quotes, durations }: UseTypingTestProps) => {
//   const [testState, setTestState] = useState<TestState>("idle");
//   const [input, setInput] = useState<string>("");
//   const [quote, setQuote] = useState<string>("");
//   const [wpm, setWpm] = useState<number>(0);
//   const [accuracy, setAccuracy] = useState<number>(0);
//   const [timer, setTimer] = useState<number>(0);
//   const [totalChars, setTotalChars] = useState<number>(0);
//   const [selectedDuration, setSelectedDuration] = useState<number>(durations[0]);
//   const [completedQuotes, setCompletedQuotes] = useState<string[]>([]); // Track completed quotes
//   const [allTypedText, setAllTypedText] = useState<string>(""); // Track all typed text
//   const intervalRef = useRef<number | null>(null);

//   const currentQuotes = useMemo(() => {
//     return selectedDuration === 60 ? QUOTES_LONG : quotes;
//   }, [selectedDuration, quotes]);

//   useEffect(() => {
//     if (!quote) {
//       setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
//     }
//   }, [currentQuotes, quote]);

//   // ✅ New function to get next quote
//   const getNextQuote = useCallback(() => {
//     return currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
//   }, [currentQuotes]);

//   // ✅ Check if current quote is completed
//   const isQuoteCompleted = useCallback(() => {
//     const trimmedInput = input.trim();
//     const trimmedQuote = quote.trim();
//     return trimmedInput === trimmedQuote;
//   }, [input, quote]);

//   const startTest = useCallback(() => {
//     setTestState("running");
//     setTimer(selectedDuration);
//     setAllTypedText(""); // Reset all typed text
//     setCompletedQuotes([]); // Reset completed quotes
    
//     intervalRef.current = window.setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer <= 1) {
//           endTest();
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);
//   }, [selectedDuration]);

//   const endTest = useCallback(() => {
//     if (intervalRef.current !== null) {
//       clearInterval(intervalRef.current);
//     }
//     setTestState("finished");
    
//     // ✅ Calculate final stats based on ALL typed text
//     const finalTypedText = allTypedText + input;
//     const allQuotesText = [...completedQuotes, quote].join(' ');
    
//     const typedWords = finalTypedText.split(' ').filter(word => word.length > 0);
//     const allWords = allQuotesText.split(' ');
    
//     let totalCorrectChars = 0;
//     let currentCharIndex = 0;
    
//     // Calculate correct characters across all typed text
//     for (let i = 0; i < finalTypedText.length; i++) {
//       if (currentCharIndex < allQuotesText.length && 
//           finalTypedText[i] === allQuotesText[currentCharIndex]) {
//         totalCorrectChars++;
//       }
//       currentCharIndex++;
//     }

//     const minutes = selectedDuration / 60;
//     const finalWpm = Math.round((totalCorrectChars / 5) / minutes);
//     const finalAccuracy = Math.round((totalCorrectChars / finalTypedText.length) * 100) || 0;
    
//     setWpm(finalWpm);
//     setAccuracy(finalAccuracy);
//     setTotalChars(finalTypedText.length);
//   }, [allTypedText, input, completedQuotes, quote, selectedDuration]);

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
//     setAllTypedText("");
//     setCompletedQuotes([]);
//     setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
//   }, [selectedDuration, currentQuotes]);

//   const handleInputChange = (value: string) => {
//     if (testState === "idle") {
//       startTest();
//     }
    
//     setInput(value);
    
//     // ✅ Check if quote is completed and timer is still running
//     if (testState === "running") {
//       const trimmedValue = value.trim();
//       const trimmedQuote = quote.trim();
      
//       if (trimmedValue === trimmedQuote) {
//         // Quote completed! Move to next quote
//         setCompletedQuotes(prev => [...prev, quote]);
//         setAllTypedText(prev => prev + value + ' '); // Add space between quotes
//         setInput(""); // Clear input for next quote
//         setQuote(getNextQuote()); // Get new quote
//         return; // Exit early to prevent further processing
//       }
//     }
    
//     // ✅ Calculate real-time stats including previously completed text
//     const currentSession = allTypedText + value;
//     setTotalChars(currentSession.length);
    
//     // Calculate WPM and Accuracy for current session
//     const allText = [...completedQuotes, quote].join(' ');
//     let correctChars = 0;
    
//     for (let i = 0; i < currentSession.length; i++) {
//       if (i < allText.length && currentSession[i] === allText[i]) {
//         correctChars++;
//       }
//     }
    
//     const timeElapsed = selectedDuration - timer;
//     if (timeElapsed > 0) {
//       const calculatedWPM = Math.round((correctChars / 5) / (timeElapsed / 60));
//       setWpm(calculatedWPM);
//       setAccuracy(Math.round((correctChars / currentSession.length) * 100) || 0);
//     }
//   };

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
//     completedQuotes, // ✅ New: expose completed quotes
//     allTypedText, // ✅ New: expose all typed text
//   };
// };


import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { TestState, UseTypingTestProps } from "../types";
import { QUOTES_LONG } from "../constants";

export const useTypingTest = ({ quotes, durations }: UseTypingTestProps) => {
  const [testState, setTestState] = useState<TestState>("idle");
  const [input, setInput] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [totalChars, setTotalChars] = useState<number>(0);
  const [selectedDuration, setSelectedDuration] = useState<number>(durations[0]);
  const [completedQuotes, setCompletedQuotes] = useState<string[]>([]);
  const [allTypedText, setAllTypedText] = useState<string>("");
  
  // ✅ Use refs to preserve state for final calculations
  const allTypedTextRef = useRef<string>("");
  const currentInputRef = useRef<string>("");
  const completedQuotesRef = useRef<string[]>([]);
  const totalCorrectCharsRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  const currentQuotes = useMemo(() => {
    return selectedDuration === 60 ? QUOTES_LONG : quotes;
  }, [selectedDuration, quotes]);

  useEffect(() => {
    if (!quote) {
      setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
    }
  }, [currentQuotes, quote]);

  const getNextQuote = useCallback(() => {
    return currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
  }, [currentQuotes]);

  const calculateCorrectChars = useCallback((typedText: string, targetText: string) => {
    let correctCount = 0;
    const minLength = Math.min(typedText.length, targetText.length);
    
    for (let i = 0; i < minLength; i++) {
      if (typedText[i] === targetText[i]) {
        correctCount++;
      }
    }
    return correctCount;
  }, []);

  const startTest = useCallback(() => {
    setTestState("running");
    setTimer(selectedDuration);
    setAllTypedText("");
    setCompletedQuotes([]);
    setTotalChars(0);
    setWpm(0);
    setAccuracy(0);
    
    // ✅ Reset refs
    allTypedTextRef.current = "";
    currentInputRef.current = "";
    completedQuotesRef.current = [];
    totalCorrectCharsRef.current = 0;
    startTimeRef.current = Date.now();
    
    intervalRef.current = window.setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          // ✅ Call endTest with current ref values
          endTestWithRefs();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  }, [selectedDuration]);

  // ✅ New function that uses refs for accurate final calculation
  const endTestWithRefs = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    
    const finalAllTypedText = allTypedTextRef.current;
    const finalCurrentInput = currentInputRef.current;
    const finalCompletedQuotes = completedQuotesRef.current;
    
    // console.log("Debug - Ref Final all typed text:", finalAllTypedText);
    // console.log("Debug - Ref Final current input:", finalCurrentInput);
    // console.log("Debug - Ref Final completed quotes:", finalCompletedQuotes);
    
    const finalTypedText = finalAllTypedText + finalCurrentInput;
    const totalTypedLength = finalTypedText.length;
    
    // console.log("Debug - Ref Final combined text:", finalTypedText);
    // console.log("Debug - Ref Total length:", totalTypedLength);
    
    setTestState("finished");
    
    if (totalTypedLength === 0) {
      setWpm(0);
      setAccuracy(0);
      setTotalChars(0);
      return;
    }

    // ✅ Calculate final stats using ref values
    const timeElapsedMs = Date.now() - startTimeRef.current;
    const timeElapsedMinutes = Math.max(timeElapsedMs / (1000 * 60), 0.1);
    
    // ✅ Calculate correct characters for the entire session
    const allTargetText = [...finalCompletedQuotes, quote].join(" ");
    const correctChars = calculateCorrectChars(finalTypedText, allTargetText);
    
    const finalWpm = Math.round((correctChars / 5) / timeElapsedMinutes);
    const finalAccuracy = Math.round((correctChars / totalTypedLength) * 100);
    
    // console.log("Debug - Ref Time elapsed (min):", timeElapsedMinutes);
    // console.log("Debug - Ref Correct chars:", correctChars);
    // console.log("Debug - Ref Final WPM:", finalWpm);
    // console.log("Debug - Ref Final Accuracy:", finalAccuracy);
    
    setWpm(Math.max(finalWpm, 0));
    setAccuracy(Math.max(finalAccuracy, 0));
    setTotalChars(totalTypedLength);
  }, [quote, calculateCorrectChars]);

  const endTest = useCallback(() => {
    endTestWithRefs();
  }, [endTestWithRefs]);

  const restart = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setTestState("idle");
    setInput("");
    setWpm(0);
    setAccuracy(0);
    setTotalChars(0);
    setTimer(selectedDuration);
    setAllTypedText("");
    setCompletedQuotes([]);
    
    // ✅ Reset refs
    allTypedTextRef.current = "";
    currentInputRef.current = "";
    completedQuotesRef.current = [];
    totalCorrectCharsRef.current = 0;
    startTimeRef.current = 0;
    
    setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);
  }, [selectedDuration, currentQuotes]);

  const handleInputChange = (value: string) => {
    if (testState === "idle") {
      startTest();
    }
    
    setInput(value);
    // ✅ Update ref immediately
    currentInputRef.current = value;
    
    if (testState === "running") {
      const trimmedValue = value.trim();
      const trimmedQuote = quote.trim();
      
      if (trimmedValue === trimmedQuote) {
        // ✅ Quote completed - update both state and refs
        const newCompletedText = allTypedText + value + " ";
        const newCompletedQuotes = [...completedQuotes, quote];
        
        setCompletedQuotes(newCompletedQuotes);
        setAllTypedText(newCompletedText);
        
        // ✅ Update refs
        allTypedTextRef.current = newCompletedText;
        completedQuotesRef.current = newCompletedQuotes;
        currentInputRef.current = "";
        
        setInput("");
        setQuote(getNextQuote());
        return;
      }
    }
    
    // ✅ Calculate real-time stats
    const currentSessionText = allTypedText + value;
    const allTargetText = [...completedQuotes, quote].join(" ");
    
    setTotalChars(currentSessionText.length);
    
    if (startTimeRef.current > 0 && testState === "running") {
      const correctChars = calculateCorrectChars(currentSessionText, allTargetText);
      const timeElapsedMs = Date.now() - startTimeRef.current;
      const timeElapsedMinutes = timeElapsedMs / (1000 * 60);
      
      if (timeElapsedMinutes > 0) {
        const currentWpm = Math.round((correctChars / 5) / timeElapsedMinutes);
        const currentAccuracy = currentSessionText.length > 0 ? 
          Math.round((correctChars / currentSessionText.length) * 100) : 0;
        
        setWpm(Math.max(currentWpm, 0));
        setAccuracy(Math.max(currentAccuracy, 0));
      }
    }
  };

  return {
    quote,
    input,
    setInput: handleInputChange,
    wpm,
    accuracy,
    timer,
    testState,
    endTest,
    restart,
    selectedDuration,
    setSelectedDuration,
    totalChars,
    durations,
    completedQuotes,
    allTypedText,
  };
};


