import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { encrypto, decrypto } from './encryptStore';
import { reducers } from '../reducers';


const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', encrypto(state));
  } catch (e) {
    throw Error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return decrypto(serializedState);
  } catch (e) {
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

export default () => {
  const middlewares = applyMiddleware(thunk);
  const storeEnhancers = [middlewares];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);
  const store = createStore(
    reducers,
    persistedState,
    composedEnhancer,
  );

  store.subscribe(() => {
    saveToLocalStorage({
      auth: store.getState().auth,
      profile: store.getState().profile
    });
  });

  return store;
};
