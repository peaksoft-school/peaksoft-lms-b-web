import React from 'react'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as GroupsIcon } from '../../assets/icons/GroupsIcon.svg'
import styled from 'styled-components'
import { ReactComponent as CourseIcon } from '../../assets/icons/CourseIcon.svg'
import { ReactComponent as TeachersIcon } from '../../assets/icons/TeachersIcon.svg'
import { ReactComponent as StudentIcon } from '../../assets/icons/StudentIcon.svg'
import { ReactComponent as Logo } from '../../assets/icons/SideBarLogo.svg'
import { ReactComponent as GroupsIcon } from '../../assets/icons/GroupsIcon.svg'

const ADMIN_SIDEBAR = [
   {
      title: 'Группы',
      path: 'groups',
      icon: <GroupsIcon fill="#ff0000" stroke="#ff0000" />,
   },
   { title: 'Курсы', path: 'courses', icon: <CourseIcon /> },
   { title: 'Учителя', path: 'teachers', icon: <TeachersIcon /> },
   { title: 'Студенты', path: 'students', icon: <StudentIcon /> },
]
const INSTRUCTOR_SIDEBAR = []
const STUDENT_SIDEBAR = []

const StyledBox = styled(Box)`
   width: 240px;
   height: 100vh;
   background-color: pink;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
`
const StyledLogo = styled(Logo)`
   margin: 38px 0 50px 0;
   display: flex;
   align-self: center;
`

const StyledNavlink = styled(NavLink)`
   width: 220px;
   padding: 15px 0;
   text-decoration: none;
   border-bottom-right-radius: 7px;
   border-top-right-radius: 7px;
   background-color: blue;
`

export const SideBar = ({ role }) => {
   let NavLinks
   switch (role) {
      case 'ADMIN':
         NavLinks = ADMIN_SIDEBAR
         break
      case 'INSTRUCTOR':
         NavLinks = INSTRUCTOR_SIDEBAR
         break
      case 'STUDENT':
         NavLinks = STUDENT_SIDEBAR
         break

      default:
         NavLinks = []
   }
   return (
      <StyledBox>
         <StyledLogo />
         <Box display="flex" flexDirection="column">
            {NavLinks.map((link) => {
               return (
                  <StyledNavlink to={link.path}>
                     {link.icon}
                     {link.title}
                  </StyledNavlink>
               )
            })}
         </Box>
      </StyledBox>
   )
}
