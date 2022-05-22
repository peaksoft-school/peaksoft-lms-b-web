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
   authError: null,
   authIsLoading: false,
   authSuccess: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: getFromLocalStorage(AUTH)
      ? { ...initState, user: getFromLocalStorage(AUTH) }
      : initState,
   reducers: {
      finishTheNotificationAuth: (state) => {
         state.authError = null
         state.authSuccess = false
      },
   },
   extraReducers: {
      [login.pending]: (state) => {
         state.authIsLoading = true
      },
      [login.fulfilled]: (state, actions) => {
         const response = actions.payload
         state.user = response
         state.authSuccess = true
      },
      [login.rejected]: (state, actions) => {
         state.authError = {
            message: 'не удалось войти в аккаунт',
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
