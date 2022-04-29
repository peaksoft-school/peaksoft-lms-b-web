import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import styled from 'styled-components'
import { Buttons } from './Buttons'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 541,
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
const StyledHeader = styled.header`
   width: 100%;
   height: 68px;
   background-color: #3772ff;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const StyledHeaderTitle = styled.h1`
   color: #ffff;
   font-size: 26px;
   font-style: normal;
   line-height: 27px;
   font-weight: 400;
   align-items: center;
   font-family: var(--base-font);
`
const StyledContentContainer = styled.div`
   padding: 25px;
`
const StyledFooter = styled.footer`
   display: flex;
   justify-content: flex-end;
   padding: 25px;
   div {
      width: 250px;
      display: flex;
      justify-content: space-around;
   }
`
export const BasicModal = ({
   isActive,
   modalCloseHanlder,
   addHandler,
   title,
   children,
}) => {
   return (
      <StyledModal
         open={isActive}
         onClose={modalCloseHanlder}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <StyledHeader>
               <StyledHeaderTitle>{title}</StyledHeaderTitle>
            </StyledHeader>
            <StyledContentContainer>{children}</StyledContentContainer>
            <StyledFooter>
               <div>
                  <Buttons
                     width="100px"
                     fontcolor="#3772ff"
                     onClick={modalCloseHanlder}
                  >
                     Cancel
                  </Buttons>
                  <Buttons
                     width="100px"
                     fontcolor="#fff"
                     background="#3772ff"
                     onClick={addHandler}
                  >
                     Add
                  </Buttons>
               </div>
            </StyledFooter>
         </Box>
      </StyledModal>
   )
}
