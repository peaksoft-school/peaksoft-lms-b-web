import React from 'react'
import styled from 'styled-components'
import { ReactComponent as PeaksoftLogo } from '../assets/icons/Logo.svg'
import { ReactComponent as StudentLogo } from '../assets/icons/Student.svg'
import { Inputs } from '../components/UI/Input'
import { Buttons } from '../components/UI/Buttons'

export const LoginPage = () => {
   const onClickButton = () => {
      console.log(process.env)
   }
   return (
      <StyledLoginPage>
         <StyledLeftSection>
            <StyledPeakSoftLogo />
            <StudentLogo />
         </StyledLeftSection>
         <StyledRightSection>
            <StyledTitleWrapper>
               <StyledTitle>
                  Добро пожоловать <br />в
                  <StyledRedSpan> Peaksoft LMS! </StyledRedSpan>
               </StyledTitle>
            </StyledTitleWrapper>
            <StyledLoginForm>
               <StyledInputsWrapper>
                  <StyledLabel>Логин:</StyledLabel>
                  <Inputs type="email" />
                  <br />
                  <StyledLabel>Пароль:</StyledLabel>
                  <Inputs type="password" />
               </StyledInputsWrapper>
               <Buttons onClick={onClickButton} margin="15px 0 0 0">
                  Войти
               </Buttons>
            </StyledLoginForm>
         </StyledRightSection>
      </StyledLoginPage>
   )
}

const StyledLoginPage = styled.div`
   display: grid;
   grid-template-columns: 1fr 1.2fr;
   height: 100vh;
`
const StyledLeftSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #3772ff;
`
const StyledRightSection = styled.div`
   background-color: white;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`
const StyledPeakSoftLogo = styled(PeaksoftLogo)`
   margin-bottom: 90px;
`
const StyledTitleWrapper = styled.div`
   margin-bottom: 90px;
`
const StyledTitle = styled.h1`
   font-size: 24px;
   font-family: var(--base-font);
   color: black;
   text-align: center;
   line-height: 32.68px;
   letter-spacing: 0.3px;
`
const StyledRedSpan = styled.span`
   color: #fa2b56;
`

const StyledInputsWrapper = styled.div`
   height: 250px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const StyledLabel = styled.label`
   font-size: 16px;
   font-family: var(--base-font);
   font-weight: 400;
   color: var(--placheholder-color);
`
const StyledLoginForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   width: 440px;
   height: 230px;
`
