import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import { Buttons } from './Buttons'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '315px',
   height: '145px',
   bgcolor: '#ffff',
   boxShadow: 2,
   p: 0,
   borderRadius: '10px',
   border: 'none',
   outline: 'none',
}

const StyledModal = styled(Modal)`
   .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
      background-color: #ffff;
   }
`

const StyledHeaderTitle = styled.h1`
   color: '#1F1C1C';
   font-size: 16px;
   font-style: normal;
   line-height: 22px;
   font-weight: 400;
   text-align: center;
   font-family: var(--base-font);
   margin: 18px 62px;
`

const StyledFooter = styled.footer`
   display: flex;
   justify-content: center;
   margin-top: 30px;
   div {
      display: flex;
      justify-content: space-around;
   }
`
const button = {
   marginRight: '12px',
}

export const ConfirmModal = ({ isActive, toggleModal, deleteHandler }) => {
   const handleClose = () => {
      toggleModal()
   }

   const handleDelete = () => {
      deleteHandler()
   }
   return (
      <StyledModal
         open={isActive}
         onClose={handleDelete}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <StyledHeaderTitle>
               Вы уверены, что хотите удалить группу...?
            </StyledHeaderTitle>
            <StyledFooter>
               <div>
                  <Buttons
                     width="108px"
                     background="#fffff"
                     fontcolor="#3772FF"
                     border="1px solid #3772FF"
                     type="button"
                     onClick={handleClose}
                     sx={button}
                     hoverBack="none"
                  >
                     Отмена
                  </Buttons>
                  <Buttons
                     width="108px"
                     background="#C91E1E"
                     type="button"
                     onClick={handleDelete}
                     hoverBack="none"
                  >
                     Удалить
                  </Buttons>
               </div>
            </StyledFooter>
         </Box>
      </StyledModal>
   )
}
