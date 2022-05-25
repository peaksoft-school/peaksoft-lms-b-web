import React from 'react'
import styled from 'styled-components'
import { ReactComponent as DeleteIcon } from '../../assets/icons/DeleteSelectedIcon.svg'

const StyledSelectedItem = styled.div`
   height: 42px;
   width: 491px;
   border-radius: 10px;
   border: 1px solid #d4d4d4;
   padding: 0 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 13px;
   font-size: 16px;
   font-family: var(--base-font);
   font-weight: 400;
`

export const SelectedItem = ({ userInfo, onDelete }) => {
   return (
      <StyledSelectedItem>
         <span>{userInfo.fullName}</span>
         <DeleteIcon onClick={onDelete} />
      </StyledSelectedItem>
   )
}
