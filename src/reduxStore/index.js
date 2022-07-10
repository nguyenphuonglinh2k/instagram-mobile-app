import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

import * as PostRedux from "./post.redux";
import * as AuthRedux from "./auth.redux";
import * as AppRedux from "./app.redux";
import * as UserRedux from "./user.redux";

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  postRedux: PostRedux.reducer,
  authRedux: AuthRedux.reducer,
  appRedux: AppRedux.reducer,
  userRedux: UserRedux.reducer,
});

export const rootReducer = (state, action) => {
  // Action logout
  if (action.type === "REQUEST_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

/* ------------- Redux Configuration ------------- */

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// kick off root saga
sagaMiddleware.run(rootSaga);

export default store;
