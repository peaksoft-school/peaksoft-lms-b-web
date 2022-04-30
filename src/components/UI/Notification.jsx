import React from 'react'
import styled from 'styled-components'

const StyledNotification = styled.div`
   background-color: ${({ backColor }) =>
      backColor === 'succes' ? '#36AC0C' : '#C91E1E'};
   width: 30vh;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   border-radius: 10px;
   padding: 15px;
`
const StyledTitle = styled.h3`
   margin: 0;
   color: white;
   margin-right: 10px;
   font-size: 16px;
   font-family: var(--base-font);
`

export const Notification = ({ title, backColor, icon }) => {
   return (
      <StyledNotification backColor={backColor}>
         <StyledTitle className="title">{title}</StyledTitle>
         {icon}
      </StyledNotification>
   )
}
