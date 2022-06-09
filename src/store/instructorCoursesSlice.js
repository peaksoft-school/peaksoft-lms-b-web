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
   presentation: null,
   tasks: [],
}

export const getAllStudents = createAsyncThunk(
   'instructor/slice/getAllStudents',
   async (_, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/students`,
            method: 'GET',
            params: {
               page: 1,
               size: 10000,
               studyFormat: 'ALL',
            },
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getAllGroups = createAsyncThunk(
   'instructor/slice/getAllGroups',
   async (_, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/groups`,
            method: 'GET',
            params: {
               page: 1,
               size: 10000,
            },
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getAllTeacherStudents = createAsyncThunk(
   'instructor/slice/getAllTeacherStudents',
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
         return { lessonId: videoData.lessonId, ...response }
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const getVideoLessonByVideoId = createAsyncThunk(
   'instructor/slice/getVideoLesson',
   async (videoId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/videoLessons/${videoId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const getTasksById = createAsyncThunk(
   'instructor/slice/getTasksByLessonId',
   async (taskId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/tasks/task/${taskId}`,
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
         return {
            lessonId: presentation.lessonId,
            ...response,
         }
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const getPresentationById = createAsyncThunk(
   'instructor/slice/getPresentationById',
   async (presentationId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/presentations/${presentationId}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const addLinkToLesson = createAsyncThunk(
   'instructor/slice/addLinkToLesson',
   async (lessonData, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/links`,
            method: 'POST',
            body: lessonData,
         })
         return {
            lessonId: lessonData.lessonId,
            ...response,
         }
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const addStudentToCourse = createAsyncThunk(
   'instrcutor/slice/addStudentToCourse',
   async (student, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/teachers/assignStudent`,
            method: 'POST',
            body: student,
         })
         return {
            ...response,
         }
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const assignGroupToCourse = createAsyncThunk(
   'instructor/slice/assignGroupToCourse',
   async (group, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/teachers/assignGroup`,
            method: 'POST',
            body: group,
         })
         return {
            ...response,
         }
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

export const instructorSlice = createSlice({
   name: 'instructor/slice',
   initialState: initState,
   reducers: {
      clearVideoLesson: (state, actions) => {
         state.videoLesson = null
      },
   },
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
         const { lessonId, id: videoId } = actions.payload
         const currentLesson = state.materials.find(
            (lesson) => lesson.id === Number(lessonId)
         )
         currentLesson.videoLessonId = videoId
         toast.success('Видео успешно добавлено')
      },
      [getVideoLessonByVideoId.fulfilled]: (state, actions) => {
         const videoLesson = actions.payload
         state.videoLesson = videoLesson
      },
      [addPresentationForLesson.fulfilled]: (state, actions) => {
         const { lessonId, id: presentationId } = actions.payload
         const currentLesson = state.materials.find(
            (lesson) => lesson.id === Number(lessonId)
         )
         currentLesson.presentationId = presentationId
         toast.success('Презентация успешно добавлена')
      },
      [addPresentationForLesson.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [getTasksById.fulfilled]: (state, actions) => {
         const tasks = actions.payload
         state.tasks = tasks
      },
      [getPresentationById.fulfilled]: (state, actions) => {
         const presentation = actions.payload
         state.presentation = presentation
      },
      [addLinkToLesson.fulfilled]: (state, actions) => {
         const { lessonId, id: linkId } = actions.payload
         const currentLesson = state.materials.find(
            (lesson) => lesson.id === Number(lessonId)
         )
         currentLesson.linkId = linkId
         toast.success('Ссылка успешно добавлена')
      },
      [getAllStudents.fulfilled]: (state, actions) => {},
      [getAllGroups.fulfilled]: (state, actions) => {},
      [addStudentToCourse.fulfilled]: (state, actions) => {
         toast.success('Студент успешно добавлен в курс')
      },
      [addStudentToCourse.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
      [assignGroupToCourse.fulfilled]: (state, actions) => {
         const message = actions.payload
         toast.success(message, 'Студенты успешно добавлены')
      },
      [assignGroupToCourse.rejected]: (state, actions) => {
         const error = actions.payload
         toast.error(` ${error}`)
      },
   },
})

export const InstructorActions = instructorSlice.actions
