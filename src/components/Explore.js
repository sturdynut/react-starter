import React, { Component, PropTypes } from 'react'  // eslint-disable-line no-unused-vars
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%'
  },
  input: {
    flex: 1,
    height: '50px',
    padding: '0 10px'
  },
  button: {
    width: '50px',
    backgroundColor: '#2ecc71',
    borderStyle: 'none',
    color: '#fff'
  }
})

export default class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  getInputValue = () => {
    return this.refs.input.value
  }

  setInputValue = (val) => {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.refs.input.value = val
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick = () => {
    this.props.onChange(this.getInputValue())
  }

  render () {
    return (
      <div className={css(styles.container)}>
        <input size="45"
          placeholder='Enter GitHub user name or repo'
          ref="input"
          className={css(styles.input)}
          defaultValue={this.props.value}
          onKeyUp={this.handleKeyUp} />
        <button onClick={this.handleGoClick}
          className={css(styles.button)}>
          GO
        </button>
      </div>
    )
  }
}
