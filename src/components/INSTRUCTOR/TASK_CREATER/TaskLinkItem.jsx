import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LinkEditor } from '../../../assets/icons/LinkEditor.svg'

export const TaskLinkItem = ({ link, linkName }) => {
   return (
      <StyledWrapper>
         <StyledLinkEditorIcon />
         <StyledLink href={link}>{linkName}</StyledLink>
      </StyledWrapper>
   )
}

const StyledWrapper = styled.div`
   display: flex;
   margin-bottom: 20px;
`

const StyledLink = styled.a`
   font-size: 16px;
   font-family: var(--base-font);
`

const StyledLinkEditorIcon = styled(LinkEditor)`
   margin-right: 20px;
`
