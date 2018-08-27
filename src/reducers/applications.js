import ApplicationClient from '../api/application_client';


export const createApplication = payload => {
  return async dispatch => {
    dispatch({type : "FETCH_APPLICATIONS_STARTED"});
    
    try {
        const response = await ApplicationClient.getSingleton().createAdmin(payload);

        dispatch({type : "FETCH_APPLICATIONS_SUCCESS", payload : response});
    } catch(err) {
        dispatch({type : "FETCH_APPLICATIONS_FAILED", err: err});
    }
  }
};
