// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const formattedData = {
    umpires: details.umpires,
    result: details.result,
    manOfTheMatch: details.man_of_the_match,
    id: details.id,
    date: details.date,
    venue: details.venue,
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    firstInnings: details.first_innings,
    secondInnings: details.second_innings,
    matchStatus: details.match_status,
  }

  const {competingTeamLogo, competingTeam, result, matchStatus} = formattedData
  const isWon = matchStatus === 'Lost' ? 'red' : 'green'

  return (
    <li className="list">
      <img
        className="Logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={isWon}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
