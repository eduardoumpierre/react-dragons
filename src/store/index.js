import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import dragons from './dragons/reducer';

export default createStore(
  combineReducers({ dragons }),
  applyMiddleware(thunkMiddleware)
);
