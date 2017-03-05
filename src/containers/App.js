import React from 'react'  // eslint-disable-line no-unused-vars
import { StyleSheet, css } from 'aphrodite'
import { Colors } from '../styles/base'

const App = () => (
  <div className={css(styles.app)}>
    <h1 className={css(styles.h1)}>Hello World</h1>
  </div>
)

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondaryColor,
    color: Colors.primaryColor
  },
  h1: {
    textAlign: 'center',
    fontSize: '5em'
  }
})

export default App
