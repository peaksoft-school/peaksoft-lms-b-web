import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fileFetchApi } from '../api/fileFetchApi'

const initState = {
   groupSuccess: {
      isActive: false,
   },
   groupError: {
      isActive: false,
   },
   isLoading: null,
   pages: 0,
   groups: [],
   table: [],
   currentPage: 0,
}

export const getGroupsList = createAsyncThunk(
   'admin/slice/getGroupsList',
   async (page, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: 'api/groups',
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

export const createGroup = createAsyncThunk(
   'admin/slice/createGroup',
   async (groupInfo, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: 'api/groups',
            method: 'POST',
            body: groupInfo,
         })

         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const deleteGroup = createAsyncThunk(
   'admin/slice/deleteGroup',
   async (id, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/groups/${id}`,
            method: 'DELETE',
         })

         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const updateGroup = createAsyncThunk(
   'admin/slice/editGrouop',
   async ({ groupInfo, groupId }, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/groups/${groupId}`,
            method: 'PUT',
            body: groupInfo,
         })

         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getStudentsByGroupId = createAsyncThunk(
   'admin/slice/getStudentsByGroupId',
   async (id, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/groups/students/${id}`,
            method: 'GET',
         })

         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getGroupById = createAsyncThunk(
   'admin/slice/getGroupById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/groups/${id}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const adminGroupSlice = createSlice({
   name: 'admin/slice',
   initialState: initState,
   reducers: {
      finishTheNotificationGroup: (state) => {
         state.groupSuccess = {
            isActive: null,
         }
         state.groupError = {
            isActive: null,
         }
      },
   },
   extraReducers: {
      [getGroupsList.fulfilled]: (state, actions) => {
         const { pages, currentPage, groups } = actions.payload
         state.pages = pages
         state.groups = groups
         state.currentPage = currentPage
      },
      [getGroupsList.rejected]: (state, actions) => {
         const { message } = actions.error
         state.groupError = message
      },
      [sendPhoto.fulfilled]: (state) => {},
      [sendPhoto.rejected]: (state, actions) => {
         const { message } = actions.error
         state.groupError = {
            isActive: true,
            message,
         }
      },
      [createGroup.fulfilled]: (state, actions) => {
         const newGroup = actions.payload
         if (state.groups.length < 12) {
            state.groups = [newGroup, ...state.groups]
         }
         state.groupSuccess = {
            isActive: true,
            message: 'новая группа добавлена',
         }
      },
      [deleteGroup.fulfilled]: (state, actions) => {
         const { id } = actions.payload
         state.groups = state.groups.filter((item) => item.id !== id)
         state.groupSuccess = {
            isActive: true,
            message: 'группа успешно удалена',
         }
      },
      [deleteGroup.rejected]: (state, actions) => {
         const { message } = actions.error
         state.groupError = {
            isActive: true,
            message,
         }
      },
      [getStudentsByGroupId.fulfilled]: (state, actions) => {
         const table = actions.payload
         state.table = table
      },
      [getStudentsByGroupId.rejected]: (state, actions) => {
         const { message } = actions.error
         state.groupError = {
            isActive: true,
            message,
         }
      },
      [updateGroup.fulfilled]: (state, action) => {
         const newGroup = action.payload
         const currentIndex = state.groups.findIndex(
            (group) => group.id === newGroup.id
         )
         state.groups.splice(currentIndex, 1, newGroup)
         state.groupSuccess = {
            isActive: true,
            message: 'вы успешно отредактировали группу',
         }
      },
      [updateGroup.rejected]: (state, actions) => {
         const { message } = actions.error
         state.groupError = {
            isActive: true,
            message,
         }
      },
      [getGroupById.rejected]: (state, actions) => {
         const { message } = actions.error
         state.groupError = {
            isActive: true,
            message,
         }
      },
   },
})

export const adminGroupActions = adminGroupSlice.actions
