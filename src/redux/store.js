import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { apiReducer } from "./api/reducers";
import { authReducer } from "./auth/reducers";
import { searchReducer } from "./search/reducers";
import {businessObjectReducer} from "./businessObj/reducers"
import { emit, init } from "./webSocets/actions";

const rootReducer = combineReducers({
  authStore: authReducer,
  apiStore: apiReducer,
  searchStore: searchReducer,
  businessObjectStore: businessObjectReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk.withExtraArgument({ emit })))
);

init(store);
