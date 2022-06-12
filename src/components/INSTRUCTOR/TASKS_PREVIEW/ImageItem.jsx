import React from 'react'
import styled from 'styled-components'

export const ImageItem = ({ imageLink }) => {
   return <StyledImageItem alt="there must be photo" src={imageLink} />
}

const StyledImageItem = styled.img`
   width: 60%;
   height: 500px;
   border-radius: 10px;
`
