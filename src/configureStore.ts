import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ApplicationState, rootReducer } from './reducers';

export default function configureStore(
    history: History,
    initialState: ApplicationState
  ): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({});
  
    const store = createStore(
      connectRouter(history)(rootReducer),
      initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history)))
    );
  
    return store;
}