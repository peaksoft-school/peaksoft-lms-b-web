/* eslint-disable jsx-a11y/aria-role */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import { Buttons } from '../components/UI/Buttons'
import { logout } from '../store/authSlice'
import { mainRoutes } from '../utils/constants/routes'
import { Layout } from '../layout/Layout'

export const Admin = () => {
   const dispatch = useDispatch()
   const logutHandler = () => {
      dispatch(logout())
   }
   return (
      <Layout>{/* <Buttons onClick={logutHandler}>logout</Buttons> */}</Layout>
   )
}
