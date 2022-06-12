import React from 'react'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as EditIcon } from '../../assets/icons/EditIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/DeleteIcon.svg'

const StyledDiv = styled('div')`
   opacity: 0;
   :hover {
      opacity: 1;
   }
`

const StyledButton = styled(Button)`
   &.MuiButton-root {
      text-transform: none;
      color: black;
      font-size: 13;
   }
`

export const CardSettings = ({ onDeleteHandler, onEditHandler }) => {
   return (
      <StyledDiv>
         <StyledButton variant="text" onClick={onEditHandler}>
            <EditIcon style={{ margin: 5 }} />
            Редактировать
         </StyledButton>
         <StyledButton variant="text" onClick={onDeleteHandler}>
            <DeleteIcon style={{ margin: 5 }} />
            Удалить
         </StyledButton>
      </StyledDiv>
   )
}
