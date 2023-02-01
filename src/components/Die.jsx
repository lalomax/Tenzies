function Die({ value, isHeld, holdDice }) {
  const styles = {
    backgroundColor: isHeld ? "#59e391" : "white"
  }
  
  return (
    <div className="die-face" style={styles} onClick={holdDice}>
      {Array(value)
        .fill(0)
        .map((_, i) => {
          const cls = value % 2 === 0 ? 'even-' : 'odd-'
          return <div className={`dot ${cls}${i + 1}`} key={i}></div>
        })}
    </div>
  );
}

export default Die;
