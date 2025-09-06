export type TestState = "idle" | "running" | "finished";

export interface UseTypingTestProps {
  quotes: string[];
  durations: number[];
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: () => React.ReactElement;
  color: string;
}

export interface ProgressBarProps {
  progress: number;
}

export interface TimerProps {
  timer: number;
  testState: TestState;
}

export interface ResultCardProps {
  wpm: number;
  accuracy: number;
  totalChars: number;
  restart: () => void;
}

export interface LeftSidebarProps {
  timer: number;
  testState: TestState;
  wpm: number;
  selectedDuration: number;
  durations: number[];
  onDurationChange: (duration: number) => void;
}

export interface RightSidebarProps {
  accuracy: number;
  totalChars: number;
  progress: number;
  testState: TestState;
}

export interface CenterContentProps {
  quote: string;
  input: string;
  setInput: (value: string) => void;
  wpm: number;
  accuracy: number;
  totalChars: number;
  testState: TestState;
  progress: number;
  onEndTest: () => void;
  onRestart: () => void;
  completedQuotes?: string[];
  allTypedText?: string;
  timeSpent?: number;
}
