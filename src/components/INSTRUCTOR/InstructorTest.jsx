import React, { useState } from 'react'
import styled from 'styled-components'
import { BreadCrumb } from '../UI/BreadCrumb'
import { Switcher } from '../UI/Switcher'
import { AppTable } from '../UI/Table'

export const InstructorTest = () => {
   const [isDisabled, setDisabled] = useState(true)
   const toggle = () => {
      setDisabled((prevState) => {
         return !prevState
      })
   }
   const DATA_COLLUMN = [
      {
         title: 'Имя Фамилия',
         accessKey: 'fullName',
      },
      {
         title: 'Правильных ответов',
         accessKey: 'studyFormat',
      },
      {
         title: 'Непривельных ответов',
         accessKey: 'phoneNumber',
      },
      {
         title: 'Баллы',
         accessKey: 'email',
      },
   ]
   return (
      <StyledInstructorTest>
         <StyledHeader>
            <StyledTitle>Название теста</StyledTitle>
            <BreadCrumb />
         </StyledHeader>
         <ControlPanel isDisabled={isDisabled}>
            <CountOfAnswers>4 ответов</CountOfAnswers>
            <SwitcherWrapper>
               <SwitcherLabel>ответы не принимаются</SwitcherLabel>
               <Switcher checked={isDisabled} onChange={toggle} />
            </SwitcherWrapper>
         </ControlPanel>
         <AppTable columns={DATA_COLLUMN} data={[]} />
      </StyledInstructorTest>
   )
}

const StyledInstructorTest = styled.div``

const StyledHeader = styled.header`
   display: flex;
   align-items: center;
   width: 100%;
   margin-bottom: 24px;
`

const StyledTitle = styled.h1`
   margin: 0;
   margin-right: 20px;
   font-family: var(--base-font);
   font-size: 24px;
`

const ControlPanel = styled.div`
   width: 100%;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${({ isDisabled }) =>
      isDisabled ? 'transparent' : 'rgba(201, 30, 30, 0.1)'};
   border-radius: 10px;
   padding: 23px 20px;
   border: 1px solid rgba(212, 212, 212, 1);
`

const CountOfAnswers = styled.p`
   color: rgba(201, 30, 30, 1);
   font-size: 16px;
   font-family: var(--base-font);
`

const SwitcherWrapper = styled.div`
   width: 22%;
   display: flex;
   justify-content: space-between;
`

const SwitcherLabel = styled.p`
   color: rgba(201, 30, 30, 1);
   font-size: 16px;
   font-family: var(--base-font);
`
