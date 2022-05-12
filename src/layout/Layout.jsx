import { Box } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { SideBar } from './SideBar'
import { Header } from './Header'
import { getGroupsList } from '../store/adminSlice'

export const Layout = ({ roles, children }) => {
   const dispatch = useDispatch()
   dispatch(getGroupsList())
   return (
      <Box display="flex">
         <SideBar roles={roles} />
         <Box width="100%" padding="14px 40px 74px 20px" marginLeft="250px">
            <Header roles={roles} />
            {children}
         </Box>
      </Box>
   )
}
