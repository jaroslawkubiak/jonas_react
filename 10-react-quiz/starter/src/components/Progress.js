function Progress({ index, numQuestions, points, maxNumPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxNumPoints}
      </p>
    </header>
  );
}

export default Progress;
