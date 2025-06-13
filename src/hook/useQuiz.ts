"use client"
import { QuestionType } from "@/types/question";
import { useState } from "react";

export const useQuiz = (questions: QuestionType[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const currentQuestion = questions[currentIndex];

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) setScore(score + 1);
    
        setTimeout(() => {
          const next = currentIndex + 1;
          if (next < questions.length) {
            setCurrentIndex(next);
          } else {
            setShowResult(true);
          }
        }, 800);
    };
    
    return { currentQuestion, currentIndex, score, showResult, handleAnswer };
 }