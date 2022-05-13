import React from 'react'
import { Layout } from './Layout'
import { AdminRoutes } from '../routes/AdminRoutes'

export const AdminLayout = () => {
   return (
      <Layout roles="ADMIN">
         <AdminRoutes />
      </Layout>
   )
}
