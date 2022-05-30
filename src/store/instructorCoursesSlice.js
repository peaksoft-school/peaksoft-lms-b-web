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

export const getAllTeacherStudents = createAsyncThunk(
   'instructor/slice/getAllTeacherStudents',
   async (courseId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/courses/students/${4}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getAllTeacherCourses = createAsyncThunk(
   'instructor/slice/getAllCoursesList',
   async () => {
      try {
         const response = await baseFetch({
            path: 'api/teachers/teacherCourses',
            method: 'GET',
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
      [getAllTeacherCourses.fulfilled]: (state, actions) => {
         const courses = actions.payload
         state.courses = courses
      },
      [getAllTeacherStudents.fulfilled]: (state, actions) => {
         const students = actions.payload
         state.students = students
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
