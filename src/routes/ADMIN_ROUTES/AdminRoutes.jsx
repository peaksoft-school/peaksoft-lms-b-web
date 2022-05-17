import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { GroupsRoute } from './GroupsRoute'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="groups" />} />
         <Route path="groups/*" element={<GroupsRoute />} />
         <Route path="courses/*" element={<div>courses</div>} />
         <Route path="teachers/*" element={<div>teachers</div>} />
         <Route path="students/*" element={<div>students</div>} />
      </Routes>
   )
}