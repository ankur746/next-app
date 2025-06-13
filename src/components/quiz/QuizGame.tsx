"use client";
import { useQuiz } from "@/hook/useQuiz";
import { Questions } from "@/mock/quiz";
import React from "react";
import Question from "./Question";
import Result from "./Result";

function QuizGame() {
  const { currentQuestion, score, showResult, handleAnswer } =
    useQuiz(Questions);

  return (
    <div className="max-w-xl mx-auto mt-10">
      {!showResult ? (
        <Question
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={Questions.length} />
      )}
    </div>
  );
}

export default QuizGame;
