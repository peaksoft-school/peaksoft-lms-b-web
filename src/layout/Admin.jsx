/* eslint-disable jsx-a11y/aria-role */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import { Buttons } from '../components/UI/Buttons'
import { SideBar } from '../components/UI/SideBar'
import { logout } from '../store/authSlice'
import { mainRoutes } from '../utils/constants/routes'

export const Admin = () => {
   const dispatch = useDispatch()
   const logutHandler = () => {
      dispatch(logout())
   }
   return (
      <Box dispaly="flex">
         <SideBar role={mainRoutes.ADMIN.role} />
         {/* <Buttons onClick={logutHandler}>logout</Buttons> */}
      </Box>
   )
}
