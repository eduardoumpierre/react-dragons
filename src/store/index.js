import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import dragons from './dragons/reducer';

export default createStore(
  combineReducers({ dragons }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
