export const saveToLocalStorage = (key, value) => {
  try {
    const currLocalState = JSON.parse(localStorage.getItem('localstate')) || {};
    const newState = JSON.stringify({...currLocalState, key: value});
    localStorage.setItem('localstate', newState);
  } catch(e) {
    console.error("Could not save to local storage");
  }
}

export const loadFromLocalStorage = key => {
  try {
    const currLocalState = localStorage.getItem('localstate');
    if (!currLocalState) {
      return;
    }
    return (JSON.parse(currLocalState))[key];
  } catch (e) {
    console.error("Could not load from local storage");
  }
}