import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { useLocation, NavLink } from 'react-router-dom'

const StyledNavlink = styled(NavLink)`
   color: ${({ color }) => color || 'gray'};
   text-decoration: none;
`

const BreadCrumb = () => {
   const { pathname } = useLocation()
   const crumbs = pathname.split('/').filter((el) => el)

   return (
      <div role="presentation">
         <Breadcrumbs aria-label="breadcrumb">
            {crumbs.map((el, index) => {
               const lastItem = crumbs.at(-1)
               const routeTo = `/${crumbs.slice(0, index + 1).join('/')}`
               if (el === lastItem) {
                  return (
                     <StyledNavlink color="black" key={el} to={routeTo}>
                        {el}
                     </StyledNavlink>
                  )
               }
               return (
                  <StyledNavlink key={el} to={routeTo}>
                     {el}
                  </StyledNavlink>
               )
            })}
         </Breadcrumbs>
      </div>
   )
}

export default BreadCrumb
