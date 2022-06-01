import React from 'react'
import styled from 'styled-components'
import { ReactComponent as FileEditor } from '../../../assets/icons/FileEditor.svg'
import { Title } from '../../UI/Title'

export const TaskFileItem = ({ file }) => {
   return (
      <StyledFileItemWrapper>
         <StyledFileEditor />
         <Title cursor="pointer">{file}</Title>
      </StyledFileItemWrapper>
   )
}

const StyledFileItemWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 30px;
`

const StyledFileEditor = styled(FileEditor)`
   margin-right: 20px;
`
