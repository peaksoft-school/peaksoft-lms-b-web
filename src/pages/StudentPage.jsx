import React from 'react'
import { Layout } from '../layout/Layout'
import { StudentRoutes } from '../routes/StudentRoutes'

export const StudentPage = () => {
   return (
      <Layout roles="STUDENT">
         <StudentRoutes />
      </Layout>
   )
}
