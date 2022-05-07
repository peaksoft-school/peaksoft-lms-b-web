import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

export const StudentRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="courses" />} />
         <Route path="courses/*" element={<div>my courses</div>} />
      </Routes>
   )
}
