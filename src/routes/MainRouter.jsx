import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../pages/LoginPage'
import { StudentLayout } from '../layout/StudentLayout'
import { AdminLayout } from '../layout/AdminLayout'
import PrivateRoute from './PrivateRoute'
import { InstructorLayout } from '../layout/InstructorLayout'

export const MainRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route
            path="/admin/*"
            element={<PrivateRoute roles="ADMIN" Component={<AdminLayout />} />}
         />
         <Route
            path="/instructor/*"
            element={
               <PrivateRoute
                  roles="INSTRUCTOR"
                  Component={<InstructorLayout />}
               />
            }
         />
         <Route
            path="/student/*"
            element={
               <PrivateRoute roles="STUDENT" Component={<StudentLayout />} />
            }
         />
      </Routes>
   )
}
