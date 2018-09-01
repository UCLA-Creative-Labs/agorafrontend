import Request from '../utils/request_api';

/**
 * This is our API Layer for our Application Service.  All requests related to our Application service
 * will pass through here.  The API Layer utilizes Request layer to make http requests.
 */

const APPLICATION_HOST = 'http://localhost:3001/apps';

class ApplicationClient {
  
  // using singleton design pattern here
  // there should only exist one instance of ApplicationClient for our entire app
  static singleton = null;

  static getSingleton() {
    if (ApplicationClient.singleton === null) {
      ApplicationClient.singleton = new ApplicationClient();
    }

    return this.singleton;
  }

  /**
   * 
   * @param {Object} param0 
   * @returns {Promise}
   */
  createApplication({firstName, lastName, email, response, year, firstChoice}) {
    const URL = `${APPLICATION_HOST}/create`;
    const params = {firstName, lastName, email, response, year, firstChoice};

    return Request.post(URL, params);
  }

  fetchApplications({years=[1,2,3,4], firstChoice, secondChoice, thirdChoice, limit=400, offset=0}) {
    const URL = `${APPLICATION_HOST}/fetch`;
    const params = {years, firstChoice, secondChoice, thirdChoice, limit, offset};

    return Request.post(URL, params).then(response => {
      return response.apps;
    });
  }
}

export default ApplicationClient;
