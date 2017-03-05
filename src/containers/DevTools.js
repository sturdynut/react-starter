import React from 'react' // eslint-disable-line no-unused-vars
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor' // eslint-disable-line no-unused-vars
import DockMonitor from 'redux-devtools-dock-monitor' // eslint-disable-line no-unused-vars

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-w">
    <LogMonitor />
  </DockMonitor>
)
