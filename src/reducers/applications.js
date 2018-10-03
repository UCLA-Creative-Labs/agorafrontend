import { Action } from "../actions/constants";
import { combineReducers } from "redux";
import { FetchStatus, CreateStatus } from "../api/constants";

export const items = (state = [], action) => {
  switch (action.type) {
    case Action.FETCH_APPLICATIONS_SUCCEEDED:
      return [...action.applications];
    default:
      return state;
  }
};

// used mainly to determine loading icon / failed attempts at fetching applications
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

// used mainly to determine loading icon / failed attempts at creating an application
const createStatus = (state = CreateStatus.IDLE, action) => {
  switch (action.type) {
    case Action.CREATE_APPLICATION_REQUESTED:
      return CreateStatus.CREATING;
    case Action.CREATE_APPLICATION_SUCCEEDED:
      return CreateStatus.IDLE;
    case Action.CREATE_APPLICATION_FAILED:
      return CreateStatus.FAILED;
    default:
      return state;
  }
};

const reducers = combineReducers({
  fetchStatus,
  createStatus,
  items
});

const selectors = state => ({
  getFetchStatus: () => state.fetchStatus,
  getCreateStatus: () => state.createStatus,
  getApplications: () => state.items
});

export { reducers, selectors };
