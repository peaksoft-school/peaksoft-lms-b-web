import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../layout/LoginPage'
import { Instructor } from '../layout/Instructor'
import { AdminPage } from '../layout/AdminPage'
import { StudentPage } from '../layout/StudentPage'
import PrivateRoute from './PrivateRoute'

export const MainRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route
            path="/admin"
            element={<PrivateRoute roles="ADMIN" Component={<AdminPage />} />}
         />
         <Route
            path="/instructor"
            roles="INSTRUCTOR"
            Component={<Instructor />}
         />
         <Route path="/student" roles="STUDENT" Component={<StudentPage />} />
      </Routes>
   )
}
