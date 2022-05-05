import React from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import { Buttons } from '../components/UI/Buttons'
import { SideBar } from '../components/UI/SideBar'
import { logout } from '../store/authSlice'

export const Admin = () => {
   const dispatch = useDispatch()
   const logutHandler = () => {
      dispatch(logout())
   }
   return (
      <Box dispaly="flex">
         <SideBar />
         <Buttons onClick={logutHandler}>logout</Buttons>
      </Box>
   )
}
