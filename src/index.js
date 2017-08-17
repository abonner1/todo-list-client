import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App'
import TodoApp from './reducers/index'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(TodoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/todo_lists" component={App} />
        <Redirect from="/" to="todo_lists" />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
