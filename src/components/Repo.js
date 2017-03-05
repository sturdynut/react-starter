import React, { PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router' // eslint-disable-line no-unused-vars

const Repo = ({ repo, owner }) => {
  const { login } = owner
  const { name, description } = repo

  return (
    <div className="Repo">
      <h3>
        <Link to={`/${login}/${name}`}>
          {name}
        </Link>
        {' by '}
        <Link to={`/${login}`}>
          {login}
        </Link>
      </h3>
      {description &&
        <p>{description}</p>
      }
    </div>
  )
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired
  }).isRequired
}

export default Repo