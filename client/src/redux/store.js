import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carsReducer } from './reducers/carsReducer';
import thunk from 'redux-thunk';
const composeEnhancers = composeWithDevTools({

});

const rootReducer = combineReducers({
   carsReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)

  )
);

export default store
