import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App'
import TodoApp from './reducers/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(TodoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
