import React from 'react'
import { Layout } from '../layout/Layout'
import { TeacherRoutes } from '../routes/TeacherRoutes'

export const Instructor = () => {
   return (
      <Layout roles="INSTRUCTOR">
         <TeacherRoutes />
      </Layout>
   )
}
