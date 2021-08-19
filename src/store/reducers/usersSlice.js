import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import firebase from 'firebase';
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
    const response = await userApi.getAll();
    let { username, password } = obj;
    let data = null;
    response.forEach((user) => {
      if (user.username === username && user.password === password) {
        data = user;
      }
    });
    return data;
  } catch (error) {
    return error;
  }
});
export const editUserApi = createAsyncThunk('users/editUserApi', async (obj) => {
  try {
    const response = await userApi.editUser(obj);
    return response;
  } catch (error) {
    return error;
  }
});
// export const loginUser = createAsyncThunk("users/login", async (obj) => {
//   try {
//     const response = await axios({
//       method: "POST",
//       url: "https://fakestoreapi.com/auth/login",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       data: {
//         username: obj.username,
//         password: obj.password,
//       },
//     });
//     let data = response.data;
//     if (response.status === 200) {
//       localStorage.setItem("token", data.token);
//       return data;
//     } else {
//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// });

// export const fetchUserBytoken = createAsyncThunk(
//   'users/fetchUserByToken',
//   async ({ token }, thunkAPI) => {
//     const config = {
//       headers: {
//         Authorization: 'Bearer ' + token
//       }
//     };
//   }
// );
//Slice
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : [],
    username: '',
    isFetching: false,
    isSuccess: localStorage.getItem('user') ? true : false
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
        firebase.auth().signOut();
        state.users = [];
        localStorage.removeItem('user');
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
    },
    [loginApi.fulfilled]: (state, { payload }) => {
      if (payload !== null) {
        state.users = payload;
        state.isSuccess = true;
        localStorage.setItem('user', JSON.stringify(payload));
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
