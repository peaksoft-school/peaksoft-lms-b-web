import React from 'react'
import { useDispatch } from 'react-redux'
import { Buttons } from '../components/UI/Buttons'
import { logout } from '../store/authSlice'

export const Admin = () => {
   const dispatch = useDispatch()
   const logutHandler = () => {
      dispatch(logout())
   }
   return (
      <div>
         AdimPage
         <Buttons onClick={logutHandler}>logout</Buttons>
      </div>
   )
}
