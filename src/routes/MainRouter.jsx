import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../pages/LoginPage'
import { Instructor } from '../pages/Instructor'
import { Admin } from '../pages/Admin'
import PrivateRoute from './PrivateRoute'
import { StudentPage } from '../pages/StudentPage'

export const MainRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route
            path="/admin/*"
            element={<PrivateRoute roles="ADMIN" Component={<Admin />} />}
         />
         <Route
            path="/instructor/*"
            element={
               <PrivateRoute roles="TEACHER" Component={<Instructor />} />
            }
         />
         <Route
            path="/student/*"
            element={
               <PrivateRoute roles="STUDENT" Component={<StudentPage />} />
            }
         />
      </Routes>
   )
}
