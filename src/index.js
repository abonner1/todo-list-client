import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './containers/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
