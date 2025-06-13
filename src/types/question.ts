export interface QuestionType {
    id: number;
    question: string;
    options: Record<string, string>;
    correctAnswer: string;
  }
  