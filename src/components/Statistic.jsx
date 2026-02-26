
function Statistic({courseResults}) {
    const scores= courseResults.map((result) => result.score);
    const average = Math.round(scores.reduce((sum,s)=> sum + s, 0) /scores.length);
    const min = Math.min(...scores);
    const max = Math.max(...scores);

        return (
  <div className="statistics">
    <h2>Statistics</h2>
    <ul>
      <li>Average: {average}</li>
      <li>Minimum: {min}</li>
      <li>Maximum: {max}</li>
    </ul>
  </div>
);
    
}
export default Statistic;