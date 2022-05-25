import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
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
         return rejectWithValue(error)
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
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: getFromLocalStorage(AUTH)
      ? { ...initState, user: getFromLocalStorage(AUTH) }
      : initState,
   reducers: {},
   extraReducers: {
      [login.pending]: (state) => {
         state.authIsLoading = true
      },
      [login.fulfilled]: (state, actions) => {
         const response = actions.payload
         state.user = response
         toast.success('вход успешно выполнен')
      },
      [login.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [logout.fulfilled]: (state) => {
         state.user.email = null
         state.user.token = null
         state.user.role = null
         toast.warn('вы успешновышли из аккаунта')
      },
   },
})

export const authActions = authSlice.actions
