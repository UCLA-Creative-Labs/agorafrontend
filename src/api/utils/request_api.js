/**
 * Request is a a custom Network Layer.  Its main benefits of using it over fetch include
 * a longer chain of promises which allows us to write error handling code all in one place.
 * Request will give json back or some standard, meaningful error so that the errors and parsing
 * don't have to be handled higher up in the call stack.
 */

class Request {
  static headers() {
    return {
      'Content-Type': 'application/json'
    }
  }

  static get(url) {
    return this.fetchWrapper(url, null, 'GET')
  }
  static post(url, params) {
    return this.fetchWrapper(url, params, 'POST')
  }

  static isJSON(response) {
    // returns true if response is of type JSON
    const contentType = response.headers.get('content-type');

    return contentType && contentType.includes('application/json');
  }

  /**
   * @param {Response} response
   * @return {Promise} 
   */
  static parseResponseBody(response) {
    if (this.isJSON(response)) {
      return response.json();
    }

    return response.text();
  }

  /**
   * @param {String} url
   * @param {Object?} params
   * @param {String} verb
   * @return {Promise} 
   */
  static fetchWrapper(url, params, verb) {

    // for logging/debugging
    console.log(`${verb} ${url}`, params);

    // options are the complicated object of options that are passed in a fetch response
    // another benefit of abstracting this portion away
    let options = {
      method: verb,
      headers: Request.headers()
    }

    if (params) {
      options.body = JSON.stringify(params);
    }

    let fetchResponse, fetchStatusCode, errorResponse;

    return fetch(url, options).then(response => {
      fetchResponse = response;
      fetchStatusCode = response.status;

      // success, simply return promise of parsed response
      if (fetchStatusCode === 200 || fetchStatusCode === 201) {
        return Request.parseResponseBody(fetchResponse);
      }
      else {
        // throw errors if bad status
        return Request.parseResponseBody(response).then(body => {
          errorResponse = body;
          throw new Error(`${url} failed status=${response.status} errorResponse=${errorResponse}`);
        })
        .catch(() => {
          // catch error if parseResponseBody throws an error
          throw new Error(`${url} failed status=${response.status}`);
        });
      }
    })
    .catch(exception => {
      // catch JSE

      // give details on what the error was so it doesn't have to be deciphered up the call stack
      let errorType;
      if (!fetchResponse) {
        // no response at all
        errorType = 'NETWORK';
      }
      else if (fetchStatusCode === 200) {
        errorType = 'PARSE RESPONSE';
      } else {
        // generic error
        errorType = 'API CALL';
      }

      // a meaningful error
      const errorDetail = {
        errorType,
        errorResponse,
        exception: exception.message,
        statusCode: fetchStatusCode
      };

      return Promise.reject(errorDetail);
    });
  }
}

export default Request;
