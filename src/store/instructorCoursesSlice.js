import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fileFetchApi } from '../api/fileFetchApi'

const initState = {
   instructorSuccess: {
      isActive: false,
   },
   instructorError: {
      isActive: false,
   },
   isLoading: null,
   pages: 0,
   courses: [],
   table: [],
   currentPage: 0,
   teachers: [],
   materials: [],
}

export const getAllCoursesList = createAsyncThunk(
   'instructor/slice/getAllCoursesList',
   async () => {
      console.log('slice is working')
      try {
         const response = await baseFetch({
            path: 'api/courses',
            method: 'GET',
            params: {
               page: 1,
               size: 8,
            },
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const getMaterialsByCourseId = createAsyncThunk(
   'instructor/slice/getMaterialsByCourseId',
   async (courseId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/lessons/teacherCourses/${courseId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const instructorSlice = createSlice({
   name: 'instructor/slice',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [getAllCoursesList.fulfilled]: (state, actions) => {
         const { courses, currentPage, pages } = actions.payload
         state.pages = pages
         state.currentPage = currentPage
         state.courses = courses
      },
      [getMaterialsByCourseId.fulfilled]: (state, actions) => {
         const materials = actions.payload
         state.materials = materials
      },
      [getMaterialsByCourseId.rejected]: (state, actions) => {
         const { message } = actions.payload
         state.instructorError = {
            isActive: true,
            message,
         }
      },
   },
})

export const InstructorActions = instructorSlice.actions
