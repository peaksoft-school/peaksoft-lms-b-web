import React from 'react'
import styled from 'styled-components'

export const Title = (props) => {
   const { children } = props
   return <TitleStyle {...props}>{children}</TitleStyle>
}
const TitleStyle = styled.p`
   font-family: var(--base-font);
   font-style: normal;
   font-weight: ${({ fontWeight }) => fontWeight || ''}!important;
   font-size: ${({ fontSize }) => fontSize || ''}!important;
   line-height: ${({ lineHeight }) => lineHeight || ''}!important;
   letter-spacing: ${({ letterSpacing }) => letterSpacing || ''}!important;
   color: ${({ color }) => color || 'black'}!important;
`
