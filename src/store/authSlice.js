import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { AUTH } from '../utils/constants/constants'
import {
   setLocalStorage,
   removeLocalStorage,
   getFromLocalStorage,
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
   initialState: getFromLocalStorage(AUTH)
      ? { ...initState, user: getFromLocalStorage(AUTH) }
      : initState,
   reducers: {},
   extraReducers: {
      [login.pending]: (state) => {
         state.isLoading = true
      },
      [login.fulfilled]: (state, actions) => {
         const response = actions.payload
         state.user = response
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
