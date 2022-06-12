import React from 'react'
import styled from 'styled-components'

export const TaskImagePicker = ({ image, deleteImage }) => {
   return (
      <StyledTaskImagePicker image={image}>
         <StyledButtons onClick={deleteImage}>Удалить</StyledButtons>
      </StyledTaskImagePicker>
   )
}

const StyledButtons = styled.button`
   width: 125px;
   height: 42px;
   border-radius: 8px;
   padding: 10px 24px;
   font-family: var(--base-font);
   color: white;
   background-color: #c91e1e;
   transition: 0.7s;
   border: none;
   display: none;
`

const StyledTaskImagePicker = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 792px;
   height: 464px;
   border-radius: 10px;
   background-image: url(${({ image }) => image});
   background-size: cover;
   margin-bottom: 30px;
   background-repeat: no-repeat;
   &:hover ${StyledButtons} {
      transition: 0.6s;
      display: block;
   }
`
