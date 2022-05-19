import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { TeachersPanel } from '../components/ADMIN/teachers/TeachersPanel'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="groups" />} />
         <Route path="groups/*" element={<div>groups</div>} />
         <Route path="courses/*" element={<div>courses</div>} />
         <Route path="teachers/*" element={<TeachersPanel />} />
         <Route path="students/*" element={<div>students</div>} />
      </Routes>
   )
}
