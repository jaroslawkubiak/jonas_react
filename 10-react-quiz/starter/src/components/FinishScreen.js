function FinishScreen({ points, maxNumPoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxNumPoints) * 100);

  let emoji;
  if (percentage === 0) emoji = "😥";
  if (percentage > 33) emoji = "🥉";
  if (percentage > 66) emoji = "🥈";
  if (percentage >= 100) emoji = "🥇";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> of {maxNumPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>Restart quiz</button>
    </>
  );
}

export default FinishScreen;
