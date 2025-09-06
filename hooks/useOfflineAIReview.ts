import { AIFeedback, GrammarError } from '@/types/ai-review';
import { useState } from 'react';

export const useOfflineAIReview = () => {
  const [feedback, setFeedback] = useState<AIFeedback | null>(null);
  const [loading, setLoading] = useState(false);

  const generateReview = async (
    typedText: string,
    originalText: string,
    wpm: number,
    accuracy: number,
    completedQuotes: string[],
    timeSpent: number
  ) => {
    setLoading(true);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // ✅ Create clean feedback object
    const cleanFeedback: AIFeedback = {
      overallScore: calculateOverallScore(wpm, accuracy),
      grammarErrors: detectGrammarErrors(typedText, originalText),
      suggestions: generateCleanSuggestions(wpm, accuracy, typedText.length),
      typingAnalysis: {
        speedRating: getSpeedRating(wpm),
        accuracyRating: getAccuracyRating(accuracy),
        consistencyRating: "Good",
        recommendations: getRecommendations(wpm, accuracy)
      },
      improvements: getImprovements(wpm, accuracy)
    };

    setFeedback(cleanFeedback);
    setLoading(false);
  };

  // ✅ Clean helper functions
  const calculateOverallScore = (wpm: number, accuracy: number): number => {
    let score = 5;
    if (wpm >= 60) score += 2;
    else if (wpm >= 40) score += 1;
    else if (wpm < 20) score -= 1;
    
    if (accuracy >= 98) score += 2;
    else if (accuracy >= 95) score += 1;
    else if (accuracy < 85) score -= 1;
    
    return Math.max(1, Math.min(10, Math.round(score)));
  };

  const getSpeedRating = (wpm: number): string => {
    if (wpm >= 70) return "Excellent";
    if (wpm >= 50) return "Good";
    if (wpm >= 30) return "Average";
    return "Needs Improvement";
  };

  const getAccuracyRating = (accuracy: number): string => {
    if (accuracy >= 98) return "Excellent";
    if (accuracy >= 95) return "Good";
    if (accuracy >= 90) return "Average";
    return "Needs Improvement";
  };

  // ✅ Generate clean, readable suggestions
  const generateCleanSuggestions = (wpm: number, accuracy: number, charCount: number): string[] => {
    const suggestions = [];
    
    // Speed-based suggestions
    if (wpm < 30) {
      suggestions.push("Practice daily for 15-20 minutes to build muscle memory and increase speed.");
    } else if (wpm < 50) {
      suggestions.push("Great progress! Focus on common word patterns to reach 50+ WPM.");
    } else if (wpm >= 70) {
      suggestions.push("Excellent speed! You're in the top 10% of typists.");
    } else {
      suggestions.push("Good typing speed! Try challenging yourself with longer texts.");
    }

    // Accuracy-based suggestions  
    if (accuracy < 90) {
      suggestions.push("Focus on accuracy over speed - correct typing builds better habits.");
    } else if (accuracy >= 98) {
      suggestions.push("Outstanding precision! Your attention to detail is excellent.");
    } else {
      suggestions.push("Good accuracy! Keep maintaining this level while increasing speed.");
    }

    return suggestions;
  };

  const getRecommendations = (wpm: number, accuracy: number): string[] => {
    const recs = [];
    
    if (wpm < 40) {
      recs.push("Practice touch typing with proper finger positioning");
      recs.push("Use typing games like Keybr.com or 10FastFingers");
    } else {
      recs.push("Try advanced exercises with punctuation and numbers");
      recs.push("Practice typing code or technical documents");
    }
    
    if (accuracy < 95) {
      recs.push("Slow down and focus on accuracy first");
      recs.push("Double-check before moving to the next word");
    }
    
    return recs;
  };

  const getImprovements = (wpm: number, accuracy: number): string[] => {
    const improvements = [
      "Set daily typing goals and track your progress",
      "Use proper ergonomics - keep wrists straight and relaxed"
    ];
    
    if (wpm < 40) {
      improvements.push("Learn the home row keys (ASDF JKL;) first");
      improvements.push("Avoid looking at the keyboard while typing");
    }
    
    if (accuracy < 95) {
      improvements.push("Practice difficult letter combinations repeatedly");
      improvements.push("Use online typing tutors with real-time feedback");
    }
    
    return improvements;
  };

  const detectGrammarErrors = (typed: string, original: string): GrammarError[] => {
    const errors: GrammarError[] = [];
    const typedWords = typed.toLowerCase().split(/\s+/);
    const originalWords = original.toLowerCase().split(/\s+/);
    
    for (let i = 0; i < Math.min(typedWords.length, originalWords.length); i++) {
      if (typedWords[i] !== originalWords[i]) {
        errors.push({
          error: typedWords[i],
          correction: originalWords[i],
          position: i,
          explanation: `Expected "${originalWords[i]}" but typed "${typedWords[i]}"`
        });
      }
    }
    
    return errors.slice(0, 3); // Limit to 3 errors
  };

  return { feedback, loading, error: null, generateReview };
};
