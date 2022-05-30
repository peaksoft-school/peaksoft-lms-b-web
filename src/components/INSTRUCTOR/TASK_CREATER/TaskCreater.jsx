import React from 'react'
import styled from 'styled-components'
import { BreadCrumb } from '../../UI/BreadCrumb'
import { TextEditor } from '../TEXT_EDITOR/TextEditor'
import { Inputs } from '../../UI/Input'
import { Buttons } from '../../UI/Buttons'
import { ReactComponent as Text } from '../../../assets/icons/Text.svg'
import { ReactComponent as FileEditor } from '../../../assets/icons/FileEditor.svg'
import { ReactComponent as ImageEditor } from '../../../assets/icons/ImageEditor.svg'
import { ReactComponent as LinkEditor } from '../../../assets/icons/LinkEditor.svg'
import { ReactComponent as CodeEditor } from '../../../assets/icons/CodeEditor.svg'

export const TaskCreater = () => {
   return (
      <Wrapper>
         <BreadCrumb />
         <StyledTaskCreater>
            <Header>Создать задание</Header>
            <ControlMenu>
               <Inputs width="1200px" />
               <Text />
               <FileEditor />
               <ImageEditor />
               <LinkEditor />
               <CodeEditor />
            </ControlMenu>
            <TextEditor isHasEditor />
         </StyledTaskCreater>
      </Wrapper>
   )
}

const StyledTaskCreater = styled.div`
   width: 100%;
   min-height: 300px;
   background-color: #fbfbfb;
   margin-top: 24px;
   border-radius: 10px;
   padding: 20px;
`

const Wrapper = styled.div`
   margin-top: 24px;
`

const Header = styled.h1`
   color: #1f6ed4;
   font-family: var(--base-font);
   font-size: 20px;
   margin-bottom: 28px;
`

const ControlMenu = styled.div`
   display: grid;
   grid-template-columns: 2.5fr 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr;
   align-items: center;
`
