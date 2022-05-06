import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/icons/SideBarLogo.svg'
import { ReactComponent as CourseIcon } from '../assets/icons/CourseIcon.svg'
import { ReactComponent as TeachersIcon } from '../assets/icons/TeachersIcon.svg'
import { ReactComponent as StudentIcon } from '../assets/icons/StudentIcon.svg'
import { ReactComponent as GroupsIcon } from '../assets/icons/GroupsIcon.svg'

const ADMIN_SIDEBAR = [
   {
      title: 'Группы',
      path: 'groups',
      icon: <GroupsIcon />,
   },
   { title: 'Курсы', path: 'courses', icon: <CourseIcon /> },
   { title: 'Учителя', path: 'teachers', icon: <TeachersIcon /> },
   { title: 'Студенты', path: 'students', icon: <StudentIcon /> },
]

export const SideBar = () => {
   return (
      <StyledBox>
         <SidebarList>
            <StyledLogo />
            {ADMIN_SIDEBAR.map((item) => (
               <StyledNavLink
                  end
                  to={item.path}
                  key={item.title}
                  className={(state) => console.log(state)}
               >
                  <ListItem button key={item} sx={{ p: 1.5, pl: 4 }}>
                     <div className="selectedLink" />
                     <ListItemIcon>{item.icon}</ListItemIcon>
                     <ListItemText primary={item.title} />
                  </ListItem>
               </StyledNavLink>
            ))}
         </SidebarList>
      </StyledBox>
   )
}

const StyledNavLink = styled(NavLink)``

const StyledLogo = styled(Logo)`
   margin: 38px 0 66px 0;
`

const StyledBox = styled(Box)`
   text-align: center;
   height: 100vh;
   background-color: #fff;
`

const SidebarList = styled(List)(() => ({
   '& .MuiListItem-root': {
      width: '93%',
      marginLeft: '1vh',
      borderRadius: '0 10px 10px 0',
      color: '#292929',
      '& .MuiTypography-root': {
         fontWeight: '600',
         fontSize: '16px',
         lineHeight: '22px',
      },

      '& path': {
         fill: '#292929',
      },
   },
   '& a': {
      textDecoration: 'none',
   },

   '.selectedLink': {
      display: 'none',
      position: 'absolute',
      background: '#1F6ED4',
      left: 0,
      width: '8px',
      height: '100%',
   },

   '& .active': {
      '& .MuiListItem-root': {
         fill: '#1F6ED4',
         background: 'rgb(221,233,249)',
      },
      '& .selectedLink': {
         display: 'block',
      },
      '& path': {
         fill: '#1F6ED4',
      },
   },
}))
