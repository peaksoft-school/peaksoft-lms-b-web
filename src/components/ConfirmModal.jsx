import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import { Buttons } from './UI/Buttons'
import { Title } from './UI/Title'

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
      width: 250px;
      display: flex;
      justify-content: space-around;
   }
`

export const ConfirmModal = ({ cancel, title, deleted }) => {
   const [open, setOpen] = useState(true)

   const handleClose = () => {
      setOpen(false)
   }

   const handleDelete = () => {
      setOpen(true)
   }
   return (
      <StyledModal
         open={open}
         onClose={handleDelete}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <Title margin="18px 62px">
               Вы уверены, что хотите удалить группу...?
            </Title>
            <StyledFooter>
               <div>
                  <Buttons type="button" onClick={cancel}>
                     Отмена
                  </Buttons>
                  <Buttons type="button" onClick={deleted}>
                     Удалить
                  </Buttons>
               </div>
            </StyledFooter>
         </Box>
      </StyledModal>
   )
}
