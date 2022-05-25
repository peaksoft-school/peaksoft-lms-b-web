import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { adminGroupSlice } from './adminGroupSlice'
import { courseSlice } from './courseSlice'
import { teachersSlice } from './adminTeachersSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      groupSlice: adminGroupSlice.reducer,
      courseSlice: courseSlice.reducer,
      teacher: teachersSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => {
      return [...getDefaultMiddleware({ serializableCheck: false })]
   },
})
