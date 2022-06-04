import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { baseFetch } from '../api/baseFetch'

const initState = {
   isLoading: null,
   pages: 0,
   courses: [],
   table: [],
   currentPage: 0,
   teachers: [],
   materials: [],
   students: [],
   videoLesson: null,
   tasks: [],
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
            path: `api/lessons/courseLessons/${courseId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const addNewLessonByCourseId = createAsyncThunk(
   'instructor/slice/addNewLessonByCourseId',
   async (lessonName, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/lessons`,
            method: 'POST',
            body: lessonName,
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const deleteLessonById = createAsyncThunk(
   'instructor/slice/deleleteLesson',
   async (lessonId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/lessons/${lessonId}`,
            method: 'DELETE',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const addVideoForLesson = createAsyncThunk(
   'instructor/slice/addVideoForLesson',
   async (videoData, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/videoLessons`,
            method: 'POST',
            body: videoData,
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const getVideoLessonByLessonid = createAsyncThunk(
   'instructor/slice/getVideoLesson',
   async (lessonId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/videoLessons/lesson/${lessonId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const getTasksByLessonId = createAsyncThunk(
   'instructor/slice/getTasksByLessonId',
   async (lessonId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/tasks/${lessonId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const addPresentationForLesson = createAsyncThunk(
   'instructor/slice/sendPresentation',
   async (presentation, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/presentations`,
            method: 'POST',
            body: presentation,
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
      [addNewLessonByCourseId.fulfilled]: (state, actions) => {
         const newLesson = actions.payload
         state.materials.push(newLesson)
      },
      [deleteLessonById.fulfilled]: (state, actions) => {
         const { name, id } = actions.payload
         state.materials = state.materials.filter((item) => item.id !== id)
         toast.success(`${name} успешно удален`)
      },
      [addVideoForLesson.fulfilled]: (state, actions) => {
         toast.success('Видео успешно добавлено')
      },
      [getVideoLessonByLessonid.fulfilled]: (state, actions) => {
         const videoLesson = actions.payload
         state.videoLesson = videoLesson
      },
      [addPresentationForLesson.fulfilled]: (state, actions) => {
         toast.success('Презентация успешно добавлена')
      },
      [addPresentationForLesson.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [getTasksByLessonId.fulfilled]: (state, actions) => {
         const tasks = actions.payload
         state.tasks = tasks
      },
   },
})

export const InstructorActions = instructorSlice.actions
