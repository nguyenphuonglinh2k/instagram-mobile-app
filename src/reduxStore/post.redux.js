import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestGetPosts: [],

  postSuccess: ["data"],
  postFailure: ["data"],
  postReset: [],
});

export const PostTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  status: null,
  posts: [],
};

/* ------------- Reducers ------------- */
export const request = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
});

export const success = (state = INITIAL_STATE, action) => {
  const data = action.data || {};
  return {
    ...state,
    isFetching: false,
    errors: null,
    status: null,
    ...data,
  };
};

export const failure = (state = INITIAL_STATE, action) => {
  const data = action.data ? action.data : {};
  return { ...state, isFetching: false, error: data };
};

export const reset = () => INITIAL_STATE;

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.REQUEST_GET_POSTS]: request,

  [Types.POST_SUCCESS]: success,
  [Types.POST_FAILURE]: failure,
  [Types.POST_RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
