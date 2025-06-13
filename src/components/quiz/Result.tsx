interface Props {
  score: number;
  total: number;
}

export default function Result({ score, total }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">🎉 Quiz Completed!</h2>
      <p className="text-lg">
        You scored {score} out of {total}
      </p>
    </div>
  );
}
