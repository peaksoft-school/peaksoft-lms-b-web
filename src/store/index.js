import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { adminGroupSlice } from './adminGroupSlice'
import { courseSlice } from './courseSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      groupSlice: adminGroupSlice.reducer,
      courseSlice: courseSlice.reducer,
   },
})
