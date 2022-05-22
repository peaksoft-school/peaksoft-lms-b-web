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
   async (userInformation, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: 'api/authentication/login',
            method: 'POST',
            body: userInformation,
         })
         setLocalStorage(AUTH, response)

         return response
      } catch (error) {
         return rejectWithValue(error.message)
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
   authError: {
      isActive: false,
   },
   authIsLoading: null,
   authSuccess: {
      isActive: false,
   },
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: getFromLocalStorage(AUTH)
      ? { ...initState, user: getFromLocalStorage(AUTH) }
      : initState,
   reducers: {
      finishTheNotificationAuth: (state) => {
         state.authError = {
            isActive: false,
         }
         state.authSuccess = {
            isActive: false,
         }
      },
   },
   extraReducers: {
      [login.pending]: (state) => {
         state.authIsLoading = true
      },
      [login.fulfilled]: (state, actions) => {
         const response = actions.payload
         state.user = response
         state.authSuccess = {
            isActive: true,
            message: 'вы успешно вошли в аккаунт',
         }
      },
      [login.rejected]: (state, actions) => {
         const { message } = actions.error
         state.authError = {
            isActive: true,
            message,
         }
      },
      [logout.fulfilled]: (state) => {
         state.user.email = null
         state.user.token = null
         state.user.role = null
      },
   },
})

export const authActions = authSlice.actions
