import React from 'react'
import { Layout } from './Layout'
import { StudentRoutes } from '../routes/StudentRoutes'

export const StudentLayout = () => {
   return (
      <Layout roles="STUDENT">
         <StudentRoutes />
      </Layout>
   )
}
