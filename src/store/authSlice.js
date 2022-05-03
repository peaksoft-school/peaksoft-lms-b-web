import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { AUTH } from '../utils/constants/constants'
import {
   getFromLocalStorage,
   setLocalStorage,
   removeLocalStorage,
} from '../utils/helpers/helpers'

export const login = createAsyncThunk(
   'authentification/login',
   async (userInformation) => {
      try {
         const response = await baseFetch({
            path: 'api/authentication/login',
            method: 'POST',
            body: userInformation,
         })
         setLocalStorage(AUTH, response)
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const logout = createAsyncThunk('authentification/logout', async () => {
   removeLocalStorage(AUTH)
})

const initState = {
   user: {
      role: null,
      token: null,
      email: null,
   },
   error: null,
   isLoading: false,
}

export const authSlice = createSlice({
   name: 'auth',
   // initialState: { ...initState, user: getFromLocalStorage(AUTH) } || initState,
   initialState: initState,
   reducers: {},
   extraReducers: {
      [login.pending]: (state) => {
         state.isLoading = true
      },
      [login.fulfilled]: (state, actions) => {
         const { role, token, email } = actions.payload
         const newUser = {
            token,
            role,
            email,
         }
         state.user = newUser
      },
      [login.rejected]: (state, payload) => {
         state.error = payload
      },
      [logout.fulfilled]: (state) => {
         state.user.email = null
         state.user.token = null
         state.user.role = null
      },
   },
})

export const authActions = authSlice.actions
