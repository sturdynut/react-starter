import React, { PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux' // eslint-disable-line no-unused-vars
import routes from '../routes'
import DevTools from './DevTools' // eslint-disable-line no-unused-vars
import { Router } from 'react-router' // eslint-disable-line no-unused-vars

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
