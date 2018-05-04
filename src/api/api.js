const createAccount = async (data) => { //bs fetch function to test stuff... change later
  try{
    const resp = await fetch('http://localhost:3000/admins/new/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const status = resp.status;
    const json = await resp.json();
    
    if(status !== 200){
    	if(json.err){
    		throw new Error(json.err);
    	} else{
    		throw new Error('Failed to create account, no error code provided.');
    	}
    }

    return{
    	err: false,
    	json: json,
    	confirm: 'Account successfully created.',
    }

  } catch(e){
    return {
      err: e.message
    }
  }
}

const login = async (data) => {
  try{
    const resp = await fetch('http://localhost:3000/admins/login/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const status = resp.status;
    const json = await resp.json();

    if(status !== 200){
    	if(json.err){
    		throw new Error(json.err);
    	}
    	else{
    		throw new Error('Failed to log in, no error code provided.');
    	}
    }

    return{
    	err: false,
    	json: json,
    	confirm: 'Login successful.',
    }

  } catch(e){
    return{
      err: e.message,
    }
  }
}

const createApp = async (data) => {
  try{
    const resp = await fetch('http://localhost:3000/apps/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const status = resp.status;
    const json = await resp.json();

    if(status !== 200){
      if(json.err){
        throw new Error(json.err);
      }
      else{
        throw new Error('Failed to submit application, no error code provided.');
      }
    }

    return{
      err: false,
      json: json,
      confirm: 'App creation successful.',
    }
  } catch(e){
    return{
      err: e.message
    }
  }
}

export { login, createAccount, createApp }