import React from 'react'
import { Layout } from './Layout'
import { InstructorRoutes } from '../routes/INSTRUCTOR_ROUTES/InstructorRoutes'

export const InstructorLayout = () => {
   return (
      <Layout roles="INSTRUCTOR">
         <InstructorRoutes />
      </Layout>
   )
}
