import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { GroupsRoute } from './GroupsRoute'
import { CoursesRoutes } from './CoursesRoute'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="groups" />} />
         <Route path="groups/*" element={<GroupsRoute />} />
         <Route path="courses/*" element={<CoursesRoutes />} />
         <Route path="teachers/*" element={<div>teachers</div>} />
         <Route path="students/*" element={<div>students</div>} />
      </Routes>
   )
}
