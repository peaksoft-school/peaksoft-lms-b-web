import React from 'react'
import styled from 'styled-components'
import { Title } from '../../UI/Title'
import { Buttons } from '../../UI/Buttons'

export const StudentItem = ({ fullName, onChooseHandler }) => {
   return (
      <div>
         <StyledStudentItem>
            <Title cursor="pointer" fontSize="20px">
               {fullName}
            </Title>
            <StyledButton onClick={onChooseHandler}>Добавить</StyledButton>
         </StyledStudentItem>
         <BorderLine />
      </div>
   )
}

const StyledStudentItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 32px;
   margin-bottom: 10px;
`

const BorderLine = styled.div`
   height: 0.2px;
   width: 100%;
   background-color: #c4c4c4;
`

const StyledButton = styled.button`
   color: #3772ff;
   background-color: transparent;
   border: none;
   outline: none;
`
