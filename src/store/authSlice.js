import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { AUTH } from '../utils/constants/constants'
import { getFromLocalStorage } from '../utils/helpers/helpers'

export const addUser = createAsyncThunk(
   'authentification/checkIsAuth',
   async (userInformation) => {
      try {
         return await baseFetch({
            path: 'api/authentication/login',
            method: 'POST',
            body: userInformation,
         })
      } catch (error) {
         return error.message
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
   initialState: getFromLocalStorage(AUTH) || initState,
   reducers: {},
   extraReducers: {
      [addUser.pending]: (state) => {
         state.isLoading = true
      },
      [addUser.fulfilled]: (state, actions) => {
         const { role, token, email } = actions.payload
         state.email = email
         state.token = token
         state.role = role
      },
      [addUser.rejected]: (state, payload) => {
         state.error = payload
      },
   },
})

export const authActions = authSlice.actions
