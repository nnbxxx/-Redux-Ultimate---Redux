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
function fetchUserRequest() {
  return {
    type: "FETCH_USER_REQUEST",
  };
}

function fetchUserSuccess(payload) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload,
  };
}

function fetchUserError() {
  return {
    type: "FETCH_USER_ERROR",
  };
}
