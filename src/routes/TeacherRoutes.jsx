import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const TeacherRoutes = () => {
   return (
      <Routes>
         <Route path="myCourses/*" element={<div>my courses</div>} />
      </Routes>
   )
}
