import React from 'react'
import styled from 'styled-components'
import { Inputs } from '../../UI/Input'
import { CustomCheckbox } from '../../UI/CustomCheckbox'

export const AnswerItem = () => {
   return (
      <StyledAnswerItem>
         <CustomCheckbox />
         <Inputs width="95%" />
      </StyledAnswerItem>
   )
}

export const StyledAnswerItem = styled.div`
   display: grid;
   grid-template-columns: 0.1fr 2.5fr;
   margin-top: 24px;
`
