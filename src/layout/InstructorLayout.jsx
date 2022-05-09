import React from 'react'
import { Layout } from './Layout'
import { TeacherRoutes } from '../routes/TeacherRoutes'

export const InstructorLayout = () => {
   return (
      <Layout roles="INSTRUCTOR">
         <TeacherRoutes />
      </Layout>
   )
}
