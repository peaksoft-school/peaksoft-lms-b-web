import React from 'react'
import styled from 'styled-components'

export const CodeItem = ({ code }) => {
   return <StyledCodeItem dangerouslySetInnerHTML={{ __html: code }} />
}

const StyledCodeItem = styled.div`
   background-color: #eff0f4;
   border-radius: 2px;
   width: fit-content;
   padding: 10px;
   font-family: var(--base-font);
   font-size: 15px;
   margin-bottom: 20px;
`
