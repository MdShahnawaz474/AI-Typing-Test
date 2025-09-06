export interface AIFeedback {
  overallScore: number; // 1-10
  grammarErrors: GrammarError[];
  suggestions: string[];
  typingAnalysis: TypingAnalysis;
  improvements: string[];
}

export interface GrammarError {
  error: string;
  correction: string;
  position: number;
  explanation: string;
}

export interface TypingAnalysis {
  speedRating: string; // "Excellent", "Good", "Average", "Needs Improvement"
  accuracyRating: string;
  consistencyRating: string;
  recommendations: string[];
}
