import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fileFetchApi } from '../api/fileFetchApi'

const initState = {
   isLoading: null,
   pages: 0,
   courses: [],
   table: [],
   currentPage: 0,
   teachers: [],
   materials: [],
   students: [],
}

export const sendTaskFile = createAsyncThunk(
   'instructor/task/sendTaskFile',
   async (file, { rejectWithValue }) => {
      try {
         const response = await fileFetchApi({
            path: 'api/files/upload',
            file,
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const TaskCreaterSlice = createSlice({
   name: 'task/creater/slice',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [sendTaskFile.fulfilled]: (state, actions) => {
         console.log(actions.payload)
      },
      [sendTaskFile.rejected]: (state, actions) => {
         console.log(actions.error)
      },
   },
})
