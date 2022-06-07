import React from 'react'
import styled from 'styled-components'
import { Inputs } from '../../UI/Input'

export const TestName = () => {
   return (
      <StyledTestName>
         <StyledTitle>Названия теста</StyledTitle>
         <Inputs width="1220" />
      </StyledTestName>
   )
}

const StyledTestName = styled.div`
   width: 100%;
   background-color: white;
   padding: 20px;
   margin-top: 24px;
   border-radius: 10px;
   border: 1px solid #d4d4d4;
`
const StyledTitle = styled.h1`
   font-family: var(--base-font);
   color: #1f6ed4;
   margin-bottom: 20px;
   font-size: 20px;
`
