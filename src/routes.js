import React from 'react' // eslint-disable-line no-unused-vars
import { Route } from 'react-router' // eslint-disable-line no-unused-vars
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'

export default <Route path="/" component={App}>
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserPage} />
</Route>
