import * as React from 'react'
import Button from '@mui/material/Button'
import styled, { css } from 'styled-components'

export function Buttons(props) {
   const { children } = props
   return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled(Button)`
   ${(
      props,
      {
         width,
         height,
         padding,
         margin,
         background,
         color,
         border,
         borderRadius,
         hoverBack,
         boxShodow,
      } = props
   ) =>
      css`
         width: ${width || ''};
         height: ${height || ''};
         padding: ${padding || ''} !important;
         margin: ${margin || ''} !important ;
         background-color: ${background || ''} !important;
         color: ${color || 'white'};
         border: ${border || ''}!important;
         border-radius: ${borderRadius || ''} !important;
         &:hover {
            background-color: ${hoverBack || ''} !important;
         }
         &:focus {
            color: ${({ hoverColor }) => hoverColor || 'white'};
         }
         &:after {
            box-shadow: ${boxShodow || ''};
         }
      `}
`
