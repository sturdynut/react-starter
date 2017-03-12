import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite'
import * as Colors from '../styles/base'
import Explore from '../components/Explore'  // eslint-disable-line no-unused-vars
import { resetErrorMessage } from '../actions'

const styles = StyleSheet.create({
  app: {
    minHeight: '100vh',
    backgroundColor: Colors.secondaryColor,
    color: Colors.white
  },
  error: {
    backgroundColor: Colors.red,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    margin: '0'
  },
  errorLink: {
    color: Colors.white,
    padding: '0 3px',
    fontSize: '0.8em',
    marginLeft: 'auto'
  }
})

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  handleDismissClick = e => {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange = nextValue => {
    browserHistory.push(`/${nextValue}`)
  }

  renderErrorMessage () {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }
    return (
      <p className={css(styles.error)}>
        <b>{errorMessage}</b>
        <a href="#"
          className={css(styles.errorLink)}
          onClick={this.handleDismissClick}>
          Dismiss
        </a>
      </p>
    )
  }

  render () {
    const { children, inputValue } = this.props
    return (
      <div className={css(styles.app)}>
        <Explore value={inputValue}
                 onChange={this.handleChange} />
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
