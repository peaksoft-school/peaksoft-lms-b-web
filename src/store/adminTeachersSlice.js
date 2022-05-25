import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'

const init = {
   teachers: [],
   isLoading: null,
   teacher: null,
   currentPage: 1,
   page: 0,
}

export const addTeachers = createAsyncThunk(
   'admin/slice/addTeachers',
   async (value, { rejectWithValue, dispatch }) => {
      try {
         const response = await baseFetch({
            path: 'api/teachers',
            method: 'POST',
            body: value,
         })
         dispatch(getAllTeachers())
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getAllTeachers = createAsyncThunk(
   'admin/slice/getAllTeachers',

   async (_, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: 'api/teachers/?page=1&size=4',
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.value)
      }
   }
)
export const deleteTeachers = createAsyncThunk(
   'admin/slice/deleteTeachers',
   async (teacherId, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/teachers/${teacherId}`,
            method: 'DELETE',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getTeacherById = createAsyncThunk(
   'admin/slice/getTeacherById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/teachers/${id}`,
            method: 'GET',
         })

         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const updateTeachers = createAsyncThunk(
   'admin/slice/updateTeachers',
   async ({ teacherId, value }, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/teachers/${teacherId}`,
            method: 'PUT',
            body: {
               ...value,
            },
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const teachersSlice = createSlice({
   name: 'teachers',
   initialState: init,
   reducers: {},
   extraReducers: {
      [addTeachers.pending]: (state) => {
         state.isLoading = true
      },
      [addTeachers.fulfilled]: (state) => {
         state.isLoading = false
      },
      [addTeachers.rejected]: (state) => {
         state.isLoading = false
      },
      [getAllTeachers.fulfilled]: (state, actions) => {
         const { pages, currentPage, teachers } = actions.payload
         state.teachers = teachers
         state.page = pages
         state.currentPage = currentPage
      },
      [getTeacherById.fulfilled]: (state, actions) => {
         const teacher = actions.payload
         state.teacher = teacher
      },
      [deleteTeachers.fulfilled]: (state, actions) => {
         const { id } = actions.payload
         state.teachers = state.teachers.filter((teacher) => teacher.id !== id)
      },
      [updateTeachers.fulfilled]: (state, actions) => {
         const newTeacherData = actions.payload
         const currentIndex = state.teachers.findIndex((teacher) => {
            return teacher.id === newTeacherData.id
         })
         state.teachers.splice(currentIndex, 1, newTeacherData)
      },
   },
})
export const teachersActions = teachersSlice.actions
