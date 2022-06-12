import React from 'react'
import styled from 'styled-components'

export const TextItem = ({ text }) => {
   return <StyledTextItem dangerouslySetInnerHTML={{ __html: text }} />
}

const StyledTextItem = styled.div`
   width: fit-content;
   margin-bottom: 20px;
   font-family: var(--base-font);
`
