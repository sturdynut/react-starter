import {install as offlineInstall} from 'offline-plugin/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import './index.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('appRoot')
  );
}

render(App)

const reloading = document.readyState === 'complete'
if (module.hot) {
  const appComponentPath = './containers/App';
  module.hot.accept(appComponentPath, () => { render(App) })

  if (!reloading) {
    bootstrap()
  }
}
else {
  bootstrap()
}

function bootstrap () {
  if (process.env.NODE_ENV === 'production') {
    offlineInstall()
  }
}
