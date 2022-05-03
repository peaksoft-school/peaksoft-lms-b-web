import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'

export const addUser = createAsyncThunk(
   'authentification/checkIsAuth',
   async (userInformation) => {
      // try {
      //    return await baseFetch({
      //       path: 'api/authentication/login',
      //       method: 'POST',
      //       body: userInformation,
      //    })
      // } catch (error) {
      //    return error.message
      // }
      return {
         role: 'ADMIN',
         email: 'admin@gmail.com',
         token: 'alsdkjfalskdhfiausyhkw3u9287e9erwu0e9ow',
      }
   }
)
export const getUser = createAsyncThunk(
   'authentification/checkIsAuth',
   async () => {}
)
export const removeUser = createAsyncThunk(
   'authentification/checkIsAuth',
   async () => {}
)

const initState = {
   error: null,
   role: null,
   token: null,
   email: null,
   isLoading: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [addUser.pending]: (state) => {
         state.isLoading = true
      },
      [addUser.fulfilled]: (state, actions) => {
         // console.log(actions.payload)
         const { role, token, email } = actions.payload
         state.email = email
         state.token = token
         state.role = role
      },
      [addUser.rejected]: (state, payload) => {
         state.error = payload
         console.log(payload)
      },
   },
})

export const authActions = authSlice.actions
