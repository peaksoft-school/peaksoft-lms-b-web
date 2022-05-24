import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { ReactComponent as PeaksoftLogo } from '../assets/icons/Logo.svg'
import { ReactComponent as StudentLogo } from '../assets/icons/Student.svg'
import { Inputs } from '../components/UI/Input'
import { Buttons } from '../components/UI/Buttons'
import { login } from '../store/authSlice'

const MAIN_ROUTES = {
   INSTRUCTOR: {
      path: '/instructor',
   },
   ADMIN: {
      path: '/admin',
   },
   STUDENT: {
      path: '/student',
   },
}

export const LoginPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { user } = useSelector((state) => state.auth)

   useEffect(() => {
      if (MAIN_ROUTES[user.role]) navigate(MAIN_ROUTES[user.role].path)
   }, [user.role])

   const submitHandler = (values) => {
      dispatch(login(values))
   }

   const validationsSchema = yup.object().shape({
      email: yup
         .string()
         .email('Не валидный электронный адресс')
         .max(255)
         .required('Требуется электронный адресс'),
      password: yup.string(),
      // .required('Требуется пароль')
      // .min(6, 'Введите не менее 6 цифр')
      // .matches(/[a-zA-Z]/, 'Пароль должен содержать только латинские буквы'),
   })

   return (
      <Formik
         initialValues={{
            email: '',
            password: '',
         }}
         validateOnBlur
         onSubmit={(inputsValues) => submitHandler(inputsValues)}
         validationSchema={validationsSchema}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
         }) => (
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
                        <StyledLabel>
                           Логин:{' '}
                           {touched.email && errors.email && (
                              <StyledErrorSpan>{errors.email}</StyledErrorSpan>
                           )}
                        </StyledLabel>
                        <Inputs
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                           name="email"
                           type="email"
                        />
                        <br />
                        <StyledLabel>
                           Пароль:{' '}
                           {touched.password && errors.password && (
                              <StyledErrorSpan>
                                 {errors.password}
                              </StyledErrorSpan>
                           )}
                        </StyledLabel>
                        <Inputs
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                           name="password"
                           type="password"
                        />
                     </StyledInputsWrapper>
                     <Buttons
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type="submit"
                        margin="15px 0 0 0"
                     >
                        Войти
                     </Buttons>
                  </StyledLoginForm>
               </StyledRightSection>
            </StyledLoginPage>
         )}
      </Formik>
   )
}

const StyledErrorSpan = styled.span`
   color: var(--error-color);
`

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
