// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import upload from './upload';

const rootReducer = combineReducers({
  counter,
  upload,
  router
});

export default rootReducer;
