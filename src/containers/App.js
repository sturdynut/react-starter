import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite'
import { Colors } from '../styles/base'
import Explore from '../components/Explore'  // eslint-disable-line no-unused-vars
import { resetErrorMessage } from '../actions'

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondaryColor,
    color: Colors.primaryColor
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
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render () {
    const { children, inputValue } = this.props
    return (
      <div className={css(styles.app)}>
        <Explore value={inputValue}
                 onChange={this.handleChange} />
        <hr />
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
