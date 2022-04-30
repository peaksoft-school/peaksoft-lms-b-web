import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'

export const addUser = createAsyncThunk(
   'authentification/checkIsAuth',
   async () => {}
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
   email: null,
   token: null,
   error: null,
   role: null,
   isLoading: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: initState,
   reducers: {},
   extraReducers: {},
})

export const authActions = authSlice.actions
