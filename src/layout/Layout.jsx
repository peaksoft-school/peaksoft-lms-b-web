import { Box } from '@mui/material'
import React from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'

export const Layout = ({ children }) => {
   return (
      <Box display="grid" gridTemplateColumns="1fr 6fr">
         <SideBar />
         <Box>
            <Header />
            {children}
         </Box>
      </Box>
   )
}
