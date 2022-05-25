import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { baseFetch } from '../api/baseFetch'
import { fileFetchApi } from '../api/fileFetchApi'

export const getCourseList = createAsyncThunk(
   'admin/slice/getCourseList',
   async (page, { rejectWithValue }) => {
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
         return rejectWithValue(error.message)
      }
   }
)
export const createCourse = createAsyncThunk(
   'admin/slice/createCourse',
   async (groupInfo, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: 'api/courses',
            method: 'POST',
            body: groupInfo,
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const sendPhoto = createAsyncThunk(
   'admin/slice/sendPhoto',
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
export const deleteCourse = createAsyncThunk(
   'admin/slice/deleteCourse',
   async (id, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/courses/${id}`,
            method: 'DELETE',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getCourseById = createAsyncThunk(
   'admin/slice/getCourseById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/courses/${id}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
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
            params: {
               page: 1,
               size: 10000000,
            },
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const getTeachersByCourseId = createAsyncThunk(
   'admin/slice/getTeachersByCourseId',
   async (courseId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/courses/teachers/${courseId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getStudentsByCourseId = createAsyncThunk(
   'admin/slice/getStudentsByCourseId',
   async (courseId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/courses/students/${courseId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const assignTeacherToCourse = createAsyncThunk(
   'admin/slice/assignTeacherToCourse',
   async (teachers, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: 'api/courses/assignTeachers',
            method: 'POST',
            body: teachers,
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const updateCourse = createAsyncThunk(
   'admin/slice/updateCourse',
   async ({ courseId, courseInformation }, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/courses/${courseId}`,
            method: 'PUT',
            body: courseInformation,
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initState = {
   isLoading: null,
   pages: 0,
   courses: [],
   coursesDetails: [],
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
      },
      [getCourseList.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },

      [sendPhoto.fulfilled]: () => {
         toast.success('файл успешно сохранен')
      },
      [createCourse.fulfilled]: (state, actions) => {
         const newGroup = actions.payload
         state.courses = [newGroup, ...state.courses]
         toast.success('новый курс успешно создан')
      },
      [createCourse.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [deleteCourse.fulfilled]: (state, action) => {
         const { id } = action.payload
         state.courses = state.courses.filter((item) => item.id !== id)
         toast.warn('курс успешно удален!!')
      },
      [deleteCourse.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [getCourseById.fulfilled]: () => {},
      [getAllTeachers.fulfilled]: (state, actions) => {
         const { pages, currentPage, teachers } = actions.payload
         state.teachers = teachers
      },
      [assignTeacherToCourse.fulfilled]: (state, actions) => {
         toast.success('учителя успешно добавлены')
      },
      [assignTeacherToCourse.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [getTeachersByCourseId.fulfilled]: (state, actions) => {
         const teachers = actions.payload
         state.coursesDetails = teachers
      },
      [getStudentsByCourseId.fulfilled]: (state, actions) => {
         const students = actions.payload
         state.coursesDetails = students
      },
      [updateCourse.fulfilled]: (state, actions) => {
         const newCourse = actions.payload
         const currentIndex = state.courses.findIndex(
            (course) => course.id === newCourse.id
         )
         state.courses.splice(currentIndex, 1, newCourse)
         toast.success('вы успешно отредактировали группу')
      },
      [updateCourse.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
   },
})

export const coursAction = courseSlice.actions
