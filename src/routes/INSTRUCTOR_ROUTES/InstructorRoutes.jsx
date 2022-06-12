import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MyCourses } from '../../components/INSTRUCTOR/MyCourses'
import { InstructorCoursesRoute } from './InstructorCoursesRoute'

export const InstructorRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="courses" />} />
         <Route path="courses/*" element={<InstructorCoursesRoute />} />
      </Routes>
   )
}
