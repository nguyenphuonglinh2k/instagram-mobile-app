export const BASE_URL = "http://10.5.9.98:5000/api";

export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const TIMEOUT = 15000;

export const HEADER_FORM_DATA_DEFAULT = {
  "Content-Type": "multipart/form-data",
};

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;

// Auth
export const POST_SIGN_IN = "/auth/login";
export const POST_SIGN_UP = "/auth/signup";

// Post
export const GET_POSTS = "/posts";
export const GET_MY_POSTS = "/posts/{userId}";
export const POST_MY_POST = "/posts/{userId}/create";
export const GET_MY_LIKE = "/likes/{userId}";
export const POST_ACTION_LIKE = "/post/like/{userId}";
export const GET_COMMENTS = "/post/{postId}/comments";
export const POST_COMMENT = "/post/{postId}/comment/{userId}";

// User
export const GET_FOLLOWERS = "/users/{userId}/followers";
export const GET_FOLLOWING = "/users/{userId}/following";
export const GET_USER_INFO = "/users/{userId}";
export const PUT_USER_INFO = "/users/{userId}/profile";
export const PUT_FOLLOW_ACTION = "/users/{userId}/follow/{followUserId}";
export const PUT_PASSWORD_CHANGE_ACTION = "/users/{userId}/password";
