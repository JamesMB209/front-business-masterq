import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { apiReducer } from "./api/reducers";
import { authReducer } from "./auth/reducers";
import { searchReducer } from "./search/reducers";
import { businessObjectReducer } from "./businessObj/reducers";
import { emit, init } from "./webSocets/actions";
import { settingsReducer } from "./settings/reducers";
import { patientHistoryReducer } from "./patientHistory/reducers";
import { pharmacyReducer } from "./pharmacyStock/reducers";

const rootReducer = combineReducers({
  authStore: authReducer,
  apiStore: apiReducer,
  searchStore: searchReducer,
  businessObjectStore: businessObjectReducer,
  settingsStore: settingsReducer,
  historyStore: patientHistoryReducer,
  pharmacyStore: pharmacyReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ emit })))
);

init(store);
