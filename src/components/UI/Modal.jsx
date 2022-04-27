import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const StyledBackDrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 30;
`

const StyledModalOverlay = styled.div`
   position: fixed;
   border-radius: 10px;
   top: 30vh;
   width: 541px;
   left: 30%;
   background-color: #ffffff;
   padding: 1rem;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
   z-index: 40;
   padding: 0;
`

const StyledHeader = styled.header`
   width: 100%;
   height: 68px;
   background-color: #3772ff;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: flex-end;
`

const StyledHeaderTitle = styled.h1`
   color: #ffff;
   font-size: 20px;
   font-style: normal;
   line-height: 27px;
   font-weight: 400;
   align-items: center;
`

const StyledContentContainer = styled.div`
   padding: 25px;
`

const StyledFooter = styled.footer`
   display: flex;
   justify-content: flex-end;
   padding: 25px;
`

export function Modal({ cancel, add, title, children }) {
   const Backdrop = React.memo(() => {
      return <StyledBackDrop />
   })

   const ModalOverlay = React.memo(() => {
      return (
         <StyledModalOverlay>
            <StyledHeader>
               <StyledHeaderTitle>{title}</StyledHeaderTitle>
            </StyledHeader>
            <StyledContentContainer>{children}</StyledContentContainer>
            <StyledFooter>
               <button type="button" onClick={cancel}>
                  Cancel
               </button>
               <button type="button" onClick={add}>
                  Add
               </button>
            </StyledFooter>
         </StyledModalOverlay>
      )
   })

   const portalElement = document.getElementById('modal')

   return (
      <>
         {createPortal(<Backdrop />, portalElement)}
         {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
      </>
   )
}
