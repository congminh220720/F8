import { createStore, applyMiddleware } from 'redux'
import rootReducer from "../reducers/";
import thunkMiddleware from 'redux-thunk'
import { cacheEnhancer } from 'redux-cache'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware), cacheEnhancer());
const store = createStore(rootReducer, composedEnhancer);
export default store;
