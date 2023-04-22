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
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
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

export const createNewUser = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUserRequest());
    try {
      const re = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
        username,
      });
      if (re && re.data.errCode === 0) {
        dispatch(createUserSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      console.log("🚀 ~ file: actions.js:78 ~ return ~ error:", error);
      dispatch(createUserError());
    }
  };
};
export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};
export const deleteUserRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUserRequest());
    try {
      const re = await axios.get("http://localhost:8080/users/all");
      if (re && re.data.errCode === 0) {
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      console.log("🚀 ~ file: actions.js:118 ~ return ~ error:", error);
      dispatch(deleteUserError());
    }
  };
};
