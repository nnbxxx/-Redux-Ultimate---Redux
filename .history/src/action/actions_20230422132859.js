import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
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

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers: data,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};
export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};
