import { Action } from '../actions/constants';
import { combineReducers } from 'redux';
import { FetchStatus } from '../api/constants';

export const applications = (state = [], action) => {
  switch (action.type) {
    case Action.FETCH_APPLICATIONS_SUCCEEDED:
      return [...action.applications];
    default:
      return state;
  }
};

const fetchStatus = (state = FetchStatus.IDLE, action) => {
  switch (action.type) {
    case Action.FETCH_APPLIATIONS_REQUESTED:
      return FetchStatus.FETCHING;
    case Action.FETCH_APPLICATIONS_SUCCEEDED:
     return FetchStatus.IDLE;
    case Action.FETCH_APPLICATIONS_FAILED:
      return FetchStatus.FAILED;
    default:
      return state;
  }
};

const reducers = combineReducers({
  fetchStatus,
  applications
});

const selectors = state => ({
  getFetchStatus: () => state.fetchStatus,
  getApplications: () => state.applications
});

export {reducers, selectors};