import React from 'react'
import styled from 'styled-components'

export const LinkItem = ({ link, linkName }) => {
   return <StyledFileItem href={link}>{linkName}</StyledFileItem>
}

const StyledFileItem = styled.a`
   color: #3772ff;
   font-family: var(--base-font);
   font-size: 15px;
   margin-bottom: 20px;
   display: block;
`
