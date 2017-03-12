import React, { PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router' // eslint-disable-line no-unused-vars
import { StyleSheet, css } from 'aphrodite'
import * as Colors from '../styles/base'

const styles = StyleSheet.create({
  a: {
    textDecoration: 'none',
    color: Colors.white
  },
  container: {
    padding: '20px',
    backgroundColor: Colors.indigo,
    ':nth-child(even)': {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
    }
  },
  title: {
    color: Colors.white,
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'baseline'
  },
  by: {
    fontSize: '0.6em',
    padding: '0 5px'
  }
})

const Repo = ({ repo, owner }) => {
  const { login } = owner
  const { name, description } = repo

  return (
    <div className={css(styles.container)}>
      <h3 className={css(styles.title)}>
        <Link className={css(styles.a)} to={`/${login}/${name}`}>
          {name}
        </Link>
        <span className={css(styles.by)}>{' by '}</span>
        <Link className={css(styles.a)} to={`/${login}`}>
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
