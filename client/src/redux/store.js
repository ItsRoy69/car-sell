import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { alertsReducer } from './reducers/alertsReducer';
import { carsReducer } from './reducers/carsReducer';
import thunk from 'redux-thunk';
const composeEnhancers = composeWithDevTools({

});

const rootReducer = combineReducers({
   carsReducer,
   alertsReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)

  )
);

export default store
