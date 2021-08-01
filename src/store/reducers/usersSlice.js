import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import userApi from "../../api/userApi";
export const getUsers = createAsyncThunk("users/get", async () => {
  try {
    const response = await userApi.getAll();
    return response;
  } catch (error) {
    return error;
  }
});
export const loginUser = createAsyncThunk("users/login", async (obj) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://fakestoreapi.com/auth/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        username: obj.username,
        password: obj.password,
      },
    });
    let data = response.data;
    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      return data;
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const fetchUserBytoken = createAsyncThunk(
  "users/fetchUserByToken",
  async ({ token }, thunkAPI) => {
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const response = axios.get("https://fakestoreapi.com/users", config);
    console.log(response);
  }
);
//Slice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    username: "",
    isFetching: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.username = action.payload.username;
      return state;
    },
    [fetchUserBytoken.fulfilled]: (state, { payload }) => {
      // state.isSuccess = true;
      // console.log(payload);
      // state.username = payload.name;
    },
  },
});

//reducer
const usersReducer = usersSlice.reducer;
//selector
export const usersSelector = (state) => state.usersReducer.users;
export const isSuccessSelector = (state) => state.usersReducer.isSuccess;
export const usernameSelector = (state) => state.usersReducer.username;

export default usersReducer;
