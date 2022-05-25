import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { GroupsRoute } from './GroupsRoute'
import { TeachersPanel } from '../../components/ADMIN/teachers/TeachersPanel'
import { CoursesRoutes } from './CoursesRoute'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="groups" />} />
         <Route path="groups/*" element={<GroupsRoute />} />
         <Route path="teachers/*" element={<TeachersPanel />} />
         <Route path="courses/*" element={<CoursesRoutes />} />
         <Route path="students/*" element={<div>students</div>} />
      </Routes>
   )
}
