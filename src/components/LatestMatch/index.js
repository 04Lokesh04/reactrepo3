// Write your code here
import './index.css'

const LatestMatch = props => {
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

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = formattedData

  return (
    <div className="main">
      <div className="left">
        <p className="heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>

      <img
        className="teamLogo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />

      <div className="right">
        <p className="headingPara">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="headingPara">Second Innigs</p>
        <p className="para">{secondInnings}</p>
        <p className="headingPara">Man Of The Match</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="headingPara">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
