const LiveScreeningScoreboard = ({
  team1,
  team2,
  battingTeamName,
  inningNo,
  totalRuns,
  wicketCount,
  totalOvers,
  ballCount,
  overCount,
  batter1,
  batter2,
  bowlerName,
  winningMessage,
  target,
  currentBowlerOvers,
}) => {
  const teamInfo = {
    name: "",
  };

  if (inningNo === 2) {
    teamInfo.name = team2;
  } else {
    teamInfo.name = team1;
  }
  return (
    <div className="live-screening-scorecard">
      <div className="left">
        <div className="teamName primaryBg">{teamInfo.name}</div>
        <div className="teamScore secondaryBg">
          {totalRuns}-{wicketCount}
        </div>
        <div className="totalOvers primaryBg">{totalOvers}</div>
        <div className="powerPlay secondaryBg">P</div>
        <div className="batsmen primaryBg">
          <div className="batsman">
            {batter1.onStrike && <span>*</span>}{batter1.name} {batter1.run} <span className="batsman-bowl">{batter1.ball}</span>
          </div>
          <div className="batsman">
          {batter2.onStrike && <span>*</span>}{batter2.name} {batter2.run} <span className="batsman-bowl">{batter2.ball}</span>
          </div>
        </div>
      </div>
      <div className="right primaryBg">
        <div className="bowlerName">{bowlerName}</div>
        <div>
          {Number(isNaN(currentBowlerOvers.run) ? 0 : currentBowlerOvers.run)} - {Number(isNaN(currentBowlerOvers.wicket) ? 0 : currentBowlerOvers.wicket)  }
        <span className="batsman-bowl bowlers-bowl">{Number(isNaN(currentBowlerOvers.over) ? 0 : currentBowlerOvers.over)}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveScreeningScoreboard;
