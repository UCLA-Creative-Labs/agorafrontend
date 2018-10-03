import ApplicationClient from "../api/application_client";
import { Action } from "./constants";

export const fetchApplications = payload => {
  return async dispatch => {
    dispatch({ type: Action.FETCH_APPLIATIONS_REQUESTED });

    try {
      const applications = await ApplicationClient.getSingleton().fetchApplications(
        payload
      );
      console.log("fetchApplications", applications);
      dispatch({ type: Action.FETCH_APPLICATIONS_SUCCEEDED, applications });
    } catch (err) {
      console.log("fetchApplications failed", err);
      dispatch({ type: Action.FETCH_APPLICATIONS_FAILED });
    }
  };
};

export const createApplication = payload => {
  return async dispatch => {
    dispatch({ type: Action.CREATE_APPLICATION_REQUESTED });
    try {
      const response = await ApplicationClient.getSingleton().createApplication(
        payload
      );
      dispatch({ type: Action.CREATE_APPLICATION_SUCCEEDED, response });
    } catch (err) {
      console.warn("createApplications failed", err);
      dispatch({ type: Action.CREATE_APPLICATION_FAILED });
    }
  };
};
