"use client";
import React from 'react';
import { QUOTES_SHORT, DURATIONS } from '../constants';
import { LeftSidebar } from './layout/LeftSidebar';
import { RightSidebar } from './layout/RightSidebar';
import { CenterContent } from './layout/CenterContent';
import { useTypingTest } from '@/hooks/useTyping';

export const TypingTest = () => {
  const {
    quote,
    input,
    setInput,
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
  } = useTypingTest({
    quotes: QUOTES_SHORT,
    durations: DURATIONS
  });

  const handleDurationChange = (newDuration: number) => {
    setSelectedDuration(newDuration);
    restart();
  };

  const progress = (selectedDuration - timer) / selectedDuration * 100;

  return (
    <div className="min-h-screen bg-dark-900 text-white font-inter overflow-hidden">
      <div className="relative z-10 h-screen flex">
        <LeftSidebar
          timer={timer}
          testState={testState}
          wpm={wpm}
          selectedDuration={selectedDuration}
          durations={durations}
          onDurationChange={handleDurationChange}
        />

        <CenterContent
          quote={quote}
          input={input}
          setInput={setInput}
          wpm={wpm}
          accuracy={accuracy}
          totalChars={totalChars}
          testState={testState}
          progress={progress}
          onEndTest={endTest}
          onRestart={restart}
        />

        <RightSidebar
          accuracy={accuracy}
          totalChars={totalChars}
          progress={progress}
          testState={testState}
        />
      </div>
    </div>
  );
};
