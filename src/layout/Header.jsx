import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Profile } from '../components/UI/Profile'
import { logout } from '../store/authSlice'

const userRole = {
   ADMIN: {
      role: 'Админстратор',
   },
   INSTRUCTOR: {
      role: 'Инструктор',
   },
   STUDENT: {
      role: 'Студент',
   },
}

export const Header = ({ roles }) => {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <StyledHeader>
         <Profile onLogout={logoutHandler} roles={userRole[roles].role} />
      </StyledHeader>
   )
}

const StyledHeader = styled.header`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   height: 60px;
   border-bottom: 1px solid #c4c4c4;
`
