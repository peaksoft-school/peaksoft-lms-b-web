import React from 'react'
import styled from 'styled-components'
import { BreadCrumb } from '../../UI/BreadCrumb'
import { TextEditor } from '../TEXT_EDITOR/TextEditor'
import { Inputs } from '../../UI/Input'
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
               <Inputs width="2000px" />
               <EditorButtons>
                  <Text />
               </EditorButtons>
               <EditorButtons>
                  <FileEditor />
               </EditorButtons>
               <EditorButtons>
                  <ImageEditor />
               </EditorButtons>
               <EditorButtons>
                  <LinkEditor />
               </EditorButtons>
               <EditorButtons>
                  <CodeEditor />
               </EditorButtons>
            </ControlMenu>
            <StyledTasksWrapper>
               <TextEditor isHasEditor />
               <TextEditor />
            </StyledTasksWrapper>
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
const EditorButtons = styled.button`
   background-color: transparent;
   opacity: 0.7;
   border-radius: 6px;
   margin-left: 15px;
   outline: none;
   border: none;
   transition: 0.6s;
   &:hover {
      box-shadow: 0 0 4px black;
   }
   &:active {
      box-shadow: 0 0 8px black;
   }
`

const StyledTasksWrapper = styled.div`
   border: 1px solid #d4d4d4;
   border-radius: 10px;
   padding: 15px;
   margin-top: 25px;
`
