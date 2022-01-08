import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import axios from 'axios';
import { authLoader } from '../../helpers/authLoader';
export const getUsers = createAsyncThunk('users/get', async () => {
  try {
    const response = await userApi.getAll();
    return response;
  } catch (error) {
    return error;
  }
});
export const loginApi = createAsyncThunk('users/loginApi', async (obj) => {
  try {
    const response = await userApi.getUser(obj);
    if (response) {
      localStorage.setItem('accessToken', response.accessToken);
      return response.accessToken;
    }
    return;
  } catch (error) {
    return error;
  }
});

export const fetchUserByToken = createAsyncThunk(
  'users/fetchUserByToken',
  async () => {
    try {
      if (!localStorage['accessToken']) return;
      const fetchUser = await axios.get('http://localhost:8017/v1/login');
      if (!fetchUser.data) return;
      return fetchUser.data;
    } catch (error) {
      return error;
    }
  }
);

export const editUserApi = createAsyncThunk(
  'users/editUserApi',
  async (obj) => {
    try {
      const response = await userApi.editUser(obj);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : [],
    username: '',
    isFetching: false,
    isSuccess: false
  },
  reducers: {
    login: {
      reducer: (state, action) => {
        let { username, password } = action.payload;
        state.users.forEach((user) => {
          if (user.username === username && user.password === password) {
            state.users = action.payload;
            state.isSuccess = true;
            localStorage.setItem('user', JSON.stringify(user));
          }
        });
      }
    },
    logoutUser: {
      reducer: (state, action) => {
        state.users = [];
        localStorage.removeItem('accessToken');
        state.isSuccess = false;
      }
    }
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [editUserApi.fulfilled]: (state, action) => {
      state.users = action.payload;
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    [loginApi.fulfilled]: (state, { payload }) => {
      authLoader(payload);
    },
    [fetchUserByToken.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.users = payload.user;
        state.isSuccess = payload.success;
      }
    }
  }
});

//reducer
const usersReducer = usersSlice.reducer;
//selector
export const usersSelector = (state) => state.users;
//action
export const { loginUser, login, logoutUser } = usersSlice.actions;
export default usersReducer;
