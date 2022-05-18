import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fileFetchApi } from '../api/fileFetchApi'

const initState = {
   error: null,
   isLoading: null,
   pages: 0,
   groups: [],
   table: [],
   currentPage: 0,
}

export const getGroupsList = createAsyncThunk(
   'admin/slice/getGroupsList',
   async (page) => {
      try {
         const response = await baseFetch({
            path: 'api/groups',
            method: 'GET',
            params: {
               page,
               size: 8,
            },
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

export const createGroup = createAsyncThunk(
   'admin/slice/createGroup',
   async (groupInfo) => {
      try {
         const response = await baseFetch({
            path: 'api/groups',
            method: 'POST',
            body: groupInfo,
         })

         return response
      } catch (error) {
         return error.message
      }
   }
)

export const deleteGroup = createAsyncThunk(
   'admin/slice/deleteGroup',
   async (id) => {
      try {
         const response = await baseFetch({
            path: `api/groups/${id}`,
            method: 'DELETE',
         })

         return response
      } catch (error) {
         return error.message
      }
   }
)

export const updateGroup = createAsyncThunk(
   'admin/slice/editGrouop',
   async ({ groupInfo, groupId }) => {
      try {
         const response = await baseFetch({
            path: `api/groups/${groupId}`,
            method: 'PUT',
            body: groupInfo,
         })

         return response
      } catch (error) {
         return error.message
      }
   }
)

export const getStudentsByGroupId = createAsyncThunk(
   'admin/slice/getStudentsByGroupId',
   async (id) => {
      try {
         const response = await baseFetch({
            path: `api/groups/students/${id}`,
            method: 'GET',
         })

         return response
      } catch (error) {
         return error.message
      }
   }
)

export const getGroupById = createAsyncThunk(
   'admin/slice/getGroupById',
   async (id) => {
      try {
         const response = await baseFetch({
            path: `api/groups/${id}`,
            method: 'GET',
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const adminGroupSlice = createSlice({
   name: 'admin/slice',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [getGroupsList.fulfilled]: (state, actions) => {
         const { pages, currentPage, groups } = actions.payload
         state.pages = pages
         state.groups = groups
         state.currentPage = currentPage
      },
      [sendPhoto.fulfilled]: (state, actions) => {},
      [createGroup.fulfilled]: (state, actions) => {
         const newGroup = actions.payload
         if (state.groups.length < 8) {
            state.groups = [...state.groups, newGroup]
         }
      },
      [deleteGroup.fulfilled]: (state, actions) => {
         const { id } = actions.payload
         state.groups = state.groups.filter((item) => item.id !== id)
      },
      [getStudentsByGroupId.fulfilled]: (state, actions) => {
         const table = actions.payload
         state.table = table
      },
      [updateGroup.fulfilled]: (state, action) => {
         const newGroup = action.payload
         const currentIndex = state.groups.findIndex(
            (group) => group.id === newGroup.id
         )
         state.groups.splice(currentIndex, 1, newGroup)
      },
      [getGroupById.fulfilled]: (state, actions) => {},
   },
})

export const adminGroupActions = adminGroupSlice.actions
