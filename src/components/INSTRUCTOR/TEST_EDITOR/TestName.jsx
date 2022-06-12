import React from 'react'
import styled from 'styled-components'
import { Inputs } from '../../UI/Input'

export const TestName = ({ value, onChangeTestName }) => {
   return (
      <StyledTestName>
         <StyledTitle>Названия теста</StyledTitle>
         <Inputs
            value={value}
            onChange={onChangeTestName}
            placeholder="Введите название теста "
            width="100%"
         />
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
   margin-bottom: 20px;
`
const StyledTitle = styled.h1`
   font-family: var(--base-font);
   color: #1f6ed4;
   margin-bottom: 20px;
   font-size: 20px;
`
