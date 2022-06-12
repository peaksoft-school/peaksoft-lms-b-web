import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
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

export const createTask = createAsyncThunk(
   'instructor/task/createTask',
   async (tasks, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: 'api/tasks',
            method: 'POST',
            body: tasks,
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
         toast.success('Файл успешно добавлен')
      },
      [sendTaskFile.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [createTask.fulfilled]: (state, actions) => {
         toast.success('Задание успешно добавлено')
      },
      [createTask.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
   },
})
