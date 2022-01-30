import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import axios from 'axios';
import { authLoader } from '../../helpers/authLoader';
import { FixMeLater } from '../../constant/other';
import { UserOutputModel } from '../../models/user/user.type';
export const getUsers = createAsyncThunk('users/get', async () => {
  try {
    const response = await userApi.getAll();
    return response;
  } catch (error) {
    return error;
  }
});
export const loginApi = createAsyncThunk(
  'users/loginApi',
  async (obj: Partial<UserOutputModel>) => {
    try {
      const response: FixMeLater = await userApi.getUser(obj);
      if (response) {
        localStorage.setItem('accessToken', response.accessToken);
        return response.accessToken;
      }
      return;
    } catch (error) {
      return error;
    }
  }
);

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
  async (obj: UserOutputModel) => {
    try {
      const response = await userApi.editUser(obj);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export type initialStateUser = {
  users: UserOutputModel;
  username: string;
  isFetching: boolean;
  isSuccess: boolean;
};

const initialState: initialStateUser = {
  users: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '{}')
    : [],
  username: '',
  isFetching: false,
  isSuccess: false
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state: FixMeLater, action) => {
      state.users = action.payload;
    });
    builder.addCase(editUserApi.fulfilled, (state: FixMeLater, action) => {
      state.users = action.payload;
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(action.payload));
    });
    builder.addCase(loginApi.fulfilled, (state, { payload }) => {
      authLoader(payload);
    });
    builder.addCase(fetchUserByToken.fulfilled, (state, { payload }) => {
      if (payload) {
        state.users = payload.user;
        state.isSuccess = payload.success;
      }
    });
  }
});

//reducer
const usersReducer = usersSlice.reducer;
//selector
export const usersSelector = (state: FixMeLater) => state.users;
//action
export const { loginUser, login, logoutUser }: FixMeLater = usersSlice.actions;
export default usersReducer;
