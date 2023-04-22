import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./types.js";

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
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      const re = await axios.get("http://localhost:8080/users/all");
      const data = re && re.data ? re.data : [];
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      console.log("🚀 ~ file: actions.js:29 ~ return ~ error:", error);
      dispatch(fetchUserError());
    }
  };
};
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (dataUsers) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};
