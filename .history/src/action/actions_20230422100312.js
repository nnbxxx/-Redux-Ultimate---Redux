import { INCREMENT, DECREMENT } from "./types.js";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
export const fetchAllUser = () => {
  return (dispatch, getState) => {};
};
function fetchPostsRequest() {
  return {
    type: "FETCH_REQUEST",
  };
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload,
  };
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR",
  };
}
