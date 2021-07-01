import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import animesReducer, { getAnimes } from './animesDuck/animesDuck';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({
    animedb: animesReducer
})

const generateStore = () =>{
  let store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
  )
  getAnimes()(store.dispatch,store.getState)
  return store
}

export default generateStore;