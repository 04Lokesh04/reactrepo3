// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props

  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="eachteam">
        <img className="imagelogo" src={teamImageUrl} alt={name} />
        <p className="para">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
