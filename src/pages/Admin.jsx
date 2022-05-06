import React from 'react'
import { mainRoutes } from '../utils/constants/routes'
import { Layout } from '../layout/Layout'
import { AdminRoutes } from '../routes/AdminRoutes'

export const Admin = () => {
   return (
      <Layout roles="ADMIN">
         <AdminRoutes />
      </Layout>
   )
}
