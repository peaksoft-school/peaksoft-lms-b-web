import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fileFetchApi } from '../api/fileFetchApi'

export const getCourseList = createAsyncThunk(
   'admin/slice/getCourseList',
   async (page) => {
      try {
         const response = await baseFetch({
            path: 'api/courses',
            method: 'GET',
            params: {
               page,
               size: 12,
            },
         })

         return response
      } catch (error) {
         return error.message
      }
   }
)
export const createCourse = createAsyncThunk(
   'admin/slice/createCourse',
   async (groupInfo) => {
      try {
         const response = await baseFetch({
            path: 'api/courses',
            method: 'POST',
            body: groupInfo,
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const sendPhoto = createAsyncThunk(
   'admin/slice/sendPhoto',
   async (file) => {
      try {
         const response = await fileFetchApi({
            path: 'api/files/upload',
            file,
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)
export const deleteCourse = createAsyncThunk(
   'admin/slice/deleteCourse',
   async (id) => {
      try {
         const response = await baseFetch({
            path: `api/courses/${id}`,
            method: 'DELETE',
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const getCourseById = createAsyncThunk(
   'admin/slice/getCourseById',
   async (id) => {
      try {
         const response = await baseFetch({
            path: `api/courses/${id}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const getAllTeachers = createAsyncThunk(
   'admin/slice/getAllTeachers',
   async () => {
      try {
         const response = await baseFetch({
            path: `api/teachers`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const getTeachersByCourseId = createAsyncThunk(
   'admin/slice/getTeachersByCourseId',
   async (courseId) => {
      try {
         const response = await baseFetch({
            path: `api/courses/teachers/${courseId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)
export const getStudentsByCourseId = createAsyncThunk(
   'admin/slice/getStudentsByCourseId',
   async (courseId) => {
      try {
         const response = await baseFetch({
            path: `api/courses/students/${courseId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const assignTeacherToCourse = createAsyncThunk(
   'admin/slice/assignTeacherToCourse',
   async (teachers) => {
      try {
         const response = await baseFetch({
            path: 'api/courses/assignTeachers',
            method: 'POST',
            body: teachers,
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

const initState = {
   error: null,
   isLoading: null,
   pages: 0,
   courses: [],
   table: [],
   currentPage: 0,
   teachers: [],
}
export const courseSlice = createSlice({
   name: 'course/slice',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [getCourseList.fulfilled]: (state, actions) => {
         const { courses, currentPage, pages } = actions.payload
         state.courses = courses
         state.currentPage = currentPage
         state.pages = pages
         console.log(courses)
      },
      [getCourseList.rejected]: (state, actions) => {
         console.log('Error')
      },

      [sendPhoto.fulfilled]: (state, actions) => {
         console.log('GeshaSexy')
      },
      [createCourse.fulfilled]: (state, actions) => {
         const newGroup = actions.payload
         state.courses = [...state.courses, newGroup]
      },
      [deleteCourse.fulfilled]: (state, action) => {
         const { id } = action.payload
         state.courses = state.courses.filter((item) => item.id !== id)
      },
      [getCourseById.fulfilled]: () => {},
      [getAllTeachers.fulfilled]: (state, actions) => {
         const teachers = actions.payload
         state.teachers = teachers
      },
      [assignTeacherToCourse.fulfilled]: () => {},
      [getTeachersByCourseId.fulfilled]: (state, actions) => {
         const teachers = actions.payload
         state.table = teachers
      },
      [getStudentsByCourseId.fulfilled]: (state, actions) => {
         const students = actions.payload
         state.table = students
      },
   },
})

export const coursAction = courseSlice.actions
