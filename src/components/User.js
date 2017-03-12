import React, { PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router' // eslint-disable-line no-unused-vars
import { StyleSheet, css } from 'aphrodite'
import * as Colors from '../styles/base'

const styles = StyleSheet.create({
  a: {
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center'
  },
  container: {
    padding: '20px',
    backgroundColor: Colors.blue
  },
  img: {
    borderRadius: '50%'
  },
  title: {
    color: Colors.white,
    fontSize: '1.4rem'
  },
  name: {
    fontSize: '0.6em',
    paddingTop: '5px'
  }
})

const User = ({ user }) => {
  const { login, avatarUrl, name } = user

  return (
    <div className={css(styles.container)}>
      <Link className={css(styles.a)} to={`/${login}`}>
        <img className={css(styles.img)} src={avatarUrl} alt={login} width="110" height="110" />
        <h3 className={css(styles.title)}>
          {login} {name && <div className={css(styles.name)}>{name}</div>}
        </h3>
      </Link>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
}

export default User
