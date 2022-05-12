import { configureStore } from '@reduxjs/toolkit'
import { adminGroupSlice } from './adminSlice'
import { authSlice } from './authSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      adminGroup: adminGroupSlice.reducer,
   },
})
