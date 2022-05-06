import { Box } from '@mui/material'
import React from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'

export const Layout = ({ roles, children }) => {
   return (
      <Box display="grid" gridTemplateColumns="0.5fr 3fr">
         <SideBar roles={roles} />
         <Box padding="14px 40px 74px 20px">
            <Header roles={roles} />
            {children}
         </Box>
      </Box>
   )
}
