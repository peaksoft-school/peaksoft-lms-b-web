import React from 'react'
import { useDispatch } from 'react-redux'
import { Buttons } from '../components/UI/Buttons'
import { logout } from '../store/authSlice'
import { ConfirmModal } from '../components/UI/ConfirmModal'

export const Admin = () => {
   const dispatch = useDispatch()
   const logutHandler = () => {
      dispatch(logout())
   }
   return (
      <div>
         <ConfirmModal isActive="true" />
         <Buttons onClick={logutHandler}>logout</Buttons>
      </div>
   )
}
