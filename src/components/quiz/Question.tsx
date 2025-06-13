"use client";
import { QuestionType } from "@/types/question";
import { useState } from "react";

interface Props {
  question: QuestionType;
  onAnswer: (isCorrect: boolean) => void;
}

function Question({ question, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  const lockAnswer = () => {
    if (selected) {
      setLocked(true);
      onAnswer(selected === question.correctAnswer);
    }
  };
  return (
    <div className="p-4 border rounded space-y-4">
      <h2 className="text-lg font-bold">{question.question}</h2>
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            disabled={locked}
            className={`p-2 rounded border ${
              selected === key ? "bg-yellow-400" : "bg-white"
            } ${
              locked && key === question.correctAnswer ? "bg-green-400" : ""
            }`}
            onClick={() => setSelected(key)}
          >
            {key}: {value}
          </button>
        ))}
      </div>

      {!locked && (
        <button
          onClick={lockAnswer}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          disabled={!selected}
        >
          Lock Answer
        </button>
      )}
    </div>
  );
}

export default Question;
