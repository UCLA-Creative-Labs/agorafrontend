import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducers as applications, selectors as applicationsSelectors } from './applications';

// track actions
const action = (state = {}, action) => action;

export default combineReducers({
  router: routerReducer,  // react-router-redux
  action,
  applications
});

const actionSelector = state => ({
  getAction: () => state,
  getActionType: () => state ? state.type : null
});

export const selectors = {
  action: state => actionSelector(state.actionSelector),
  applications: state => applicationsSelectors(state.applications)
}
