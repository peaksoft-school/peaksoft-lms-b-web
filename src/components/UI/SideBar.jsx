import React from 'react'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { ReactComponent as GroupsIcon } from '../../assets/icons/GroupsIcon.svg'
import { ReactComponent as CourseIcon } from '../../assets/icons/CourseIcon.svg'
import { ReactComponent as TeachersIcon } from '../../assets/icons/TeachersIcon.svg'
import { ReactComponent as StudentIcon } from '../../assets/icons/StudentIcon.svg'

const ADMIN_SIDEBAR = [
   { title: 'Группы', route: 'groups', icon: <GroupsIcon /> },
   { title: 'Курсы', route: 'courses', icon: <CourseIcon /> },
   { title: 'Учителя', route: 'teachers', icon: <TeachersIcon /> },
   { title: 'Студенты', route: 'students', icon: <StudentIcon /> },
]

export const SideBar = () => {
   return (
      <Box display="flex">
         <Box>hellow world</Box>
      </Box>
   )
}
