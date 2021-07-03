import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import animesReducer, { getAnimes } from './animesDuck/animesDuck';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({
    animedb: animesReducer
})

let num = 0;

const generateStore = () =>{
  let store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
  )

  const createAnime = setInterval(()=>{
  getAnimes(num)(store.dispatch,store.getState);
  num+=20
  if(num > 500 && num <= 1000){
    clearInterval(createAnime)
  }
 },500)

  return store
}   


export default generateStore;