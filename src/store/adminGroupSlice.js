import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'

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
   async () => {
      try {
         const response = await baseFetch({
            path: 'api/groups',
            method: 'GET',
            params: {
               page: 0,
               size: 8,
            },
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
      [getGroupsList.pending]: (state) => {
         state.groups.isLoading = true
      },
      [getGroupsList.fulfilled]: (state, actions) => {
         const { pages, groups, currentPage } = actions.payload
         state.pages = pages
         state.groups = groups
         state.currentPage = currentPage
      },
      [getGroupsList.rejected]: (state, actions) => {
         state.error = actions.payload
      },
   },
})

export const adminGroupActions = adminGroupSlice.actions
