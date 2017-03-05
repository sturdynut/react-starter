import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'  // eslint-disable-line no-unused-vars
import App from './containers/App'

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('appRoot')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./containers/App.js', () => {
    renderApp(require('./containers/App').default)
  })
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}
