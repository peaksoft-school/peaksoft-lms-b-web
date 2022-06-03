import React from 'react'
import styled from 'styled-components'
import InstructorVideo from '../../components/INSTRUCTOR/InstructorVideo'

export const InstructorPreview = () => {
   return (
      <StyledWrapper>
         <InstructorVideo />
      </StyledWrapper>
   )
}

const StyledWrapper = styled.div`
   width: 100%;
   min-height: 70px;
   background-color: #ffffff;
   border-radius: 10px;
   margin-top: 24px;
   padding: 24px 20px;
`
