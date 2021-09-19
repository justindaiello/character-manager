export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state: object) {
  try {
    const serializedState = JSON.stringify(state);

    return localStorage.setItem('state', serializedState);
  } catch (err) {
    return undefined;
  }
}

export function clearState() {
  try {
    localStorage.setItem('state', '');
  } catch (err) {
    undefined;
  }
}

export function removeState() {
  try {
    localStorage.removeItem('state');
  } catch (err) {
    undefined;
  }
}
