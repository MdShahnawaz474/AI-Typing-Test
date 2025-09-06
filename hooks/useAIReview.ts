import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AIFeedback } from '@/types/ai-review';

// ✅ Use Google Gemini instead of OpenAI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!);

export const useAIReview = () => {
  const [feedback, setFeedback] = useState<AIFeedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateReview = async (
    typedText: string,
    originalText: string,
    wpm: number,
    accuracy: number,
    completedQuotes: string[],
    timeSpent: number
  ) => {
    setLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `
You are an AI typing performance reviewer.

TASK: Return ONLY a valid JSON object. Do not include explanations, extra text, or markdown formatting. 
Do not add anything outside of the JSON.

INPUT:
TYPED TEXT: "${typedText}"
ORIGINAL TEXT: "${originalText}"

PERFORMANCE METRICS:
- Speed: ${wpm} WPM
- Accuracy: ${accuracy}%
- Time Spent: ${timeSpent} seconds
- Completed Paragraphs: ${completedQuotes.length}

OUTPUT FORMAT (strictly this JSON structure):
{
  "overallScore": [1-10 rating],
  "grammarErrors": [
    {
      "error": "incorrect text",
      "correction": "correct text",
      "position": [character position],
      "explanation": "why this is wrong"
    }
  ],
  "suggestions": [
    "specific improvement suggestion 1",
    "specific improvement suggestion 2"
  ],
  "typingAnalysis": {
    "speedRating": "Excellent/Good/Average/Needs Improvement",
    "accuracyRating": "Excellent/Good/Average/Needs Improvement",
    "consistencyRating": "Excellent/Good/Average/Needs Improvement",
    "recommendations": [
      "typing technique recommendation 1",
      "typing technique recommendation 2"
    ]
  },
  "improvements": [
    "overall improvement tip 1",
    "overall improvement tip 2"
  ]
}

IMPORTANT RULES:
- Respond ONLY with the JSON object.
- Do not use markdown (no \`\`\`json).
- Do not include extra comments, explanations, or text.
- Ensure the JSON is valid and complete.
`;


      const result = await model.generateContent(prompt);
      const response = await result.response;
      const feedbackText = response.text();
      
      try {
        // Clean the response (remove markdown formatting if present)
       const cleanText = feedbackText
  .replace(/```json\s*/g, '') // remove ```json
  .replace(/```/g, '')        // remove closing ```
  .trim();
        const parsedFeedback: AIFeedback = JSON.parse(cleanText);
        setFeedback(parsedFeedback);
        // console.log(parsedFeedback);
        
      } catch (parseError) {
        // Fallback with basic analysis
        setFeedback(createBasicFeedback(wpm, accuracy, typedText, feedbackText));
      }
    } catch (err) {
      console.error('Gemini API Error:', err);
    //   setError('Failed to generate AI feedback. Please try again.');
      // Provide offline fallback
      setFeedback(createBasicFeedback(wpm, accuracy, typedText));
    }

    setLoading(false);
  };

  // ✅ Fallback feedback generator
  const createBasicFeedback = (wpm: number, accuracy: number, typedText: string, aiResponse?: string): AIFeedback => {
    const speedRating = wpm >= 60 ? "Excellent" : wpm >= 40 ? "Good" : wpm >= 20 ? "Average" : "Needs Improvement";
    const accuracyRating = accuracy >= 95 ? "Excellent" : accuracy >= 85 ? "Good" : accuracy >= 75 ? "Average" : "Needs Improvement";
    
    return {
      overallScore: Math.min(Math.max(Math.round((wpm/60 + accuracy/100) * 5), 1), 10),
      grammarErrors: [],
      suggestions: aiResponse ? [aiResponse] : [
        `Your typing speed of ${wpm} WPM is ${speedRating.toLowerCase()}.`,
        `Your accuracy of ${accuracy}% shows ${accuracyRating.toLowerCase()} precision.`,
        "Keep practicing to build muscle memory and improve consistency."
      ],
      typingAnalysis: {
        speedRating,
        accuracyRating,
        consistencyRating: "Good",
        recommendations: [
          "Practice touch typing with proper finger positioning",
          "Focus on accuracy before increasing speed",
          "Take regular breaks to maintain focus"
        ]
      },
      improvements: [
        "Use online typing games to make practice more engaging",
        "Set daily typing goals to track your progress",
        "Learn keyboard shortcuts to boost productivity"
      ]
    };
  };

  return { feedback, loading, error, generateReview };
};
