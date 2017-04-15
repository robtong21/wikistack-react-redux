import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux'
import axios from 'axios'
import AddPage from './components/AddPage';
import WikiPagesContainer from './containers/WikiPagesContainer';
import Layout from './Layout';
import reducer, { getPages } from './reducers'
import { fetch } from './actions'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const onAppEnter = () => {
  axios.get('/api/wiki')
  .then(res => {
    console.log('pages in onAppEnter', res)
    store.dispatch(fetch(res.data))
  })
}

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/wiki" component={WikiPagesContainer} onEnter={ onAppEnter } />
      <Route path="/wiki/add" component={AddPage} />
      <IndexRedirect to="/wiki" />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('app')
);

export default store
