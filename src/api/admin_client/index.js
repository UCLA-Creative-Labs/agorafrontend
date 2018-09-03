import Request from '../utils/request_api';

/**
 * This is our API Layer for our Admin Service.  All requests related to our Admin service
 * will pass through here.  The API Layer utilizes the Network layer to make requests.
 */


const ADMIN_HOST = 'http://localhost:3001/admin';

class AdminClient {
  
  // using singleton design pattern here
  // there should only exist one instance of AdminClient for our entire app
  static singleton = null;

  static getSingleton() {
    if (AdminClient.singleton === null) {
      AdminClient.singleton = new AdminClient();
    }

    return this.singleton;
  }

  /**
   * 
   * @param {Object} param0 
   * @returns {Promise}
   */
  createAdmin({firstName, lastName, username, email, password}) {
    const URL = `${ADMIN_HOST}/`;
    const params = {firstName, lastName, username, email, password};

    return Request.post(URL, params);
  }
}

export default AdminClient;
