import React from 'react'
import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import { Inputs } from '../../UI/Input'

export const AnswerItem = ({ isChecked, inputValue, id }) => {
   return (
      <StyledAnswerItem>
         <Checkbox checked={isChecked} />
         <Inputs width="95%" value={inputValue} />
      </StyledAnswerItem>
   )
}

export const StyledAnswerItem = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 24px;
`
