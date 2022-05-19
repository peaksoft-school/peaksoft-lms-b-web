import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { teachersSlice } from './adminTeachersSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      teacher: teachersSlice.reducer,
   },
})
