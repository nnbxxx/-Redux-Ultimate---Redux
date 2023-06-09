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
export const fetchUserRequest = () {
  return {
    type: "FETCH_USER_REQUEST",
  };
}

export const fetchUserSuccess = (payload) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload,
  };
}

export const fetchUserError = () {
  return {
    type: "FETCH_USER_ERROR",
  };
}
