import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'  // eslint-disable-line no-unused-vars
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('appRoot')
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./containers/Root.js', () => {
    renderApp(require('./containers/Root').default)
  })
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}
