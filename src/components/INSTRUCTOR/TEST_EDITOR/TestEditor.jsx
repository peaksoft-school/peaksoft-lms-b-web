import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router'
import { TestName } from './TestName'
import { TestItem } from './TestItem'
import { saveTest, testCreaterActions } from '../../../store/testCreaterSlice'
import { Buttons } from '../../UI/Buttons'
import { ReactComponent as PlusIcon } from '../../../assets/icons/PlusIcon.svg'

export const TestEditor = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { testName, questionRequestList } = useSelector(
      (store) => store.testCreaterSlice
   )
   const { lessonId, coursesId } = useParams()
   const onChangeName = (event) => {
      dispatch(testCreaterActions.changeTestName(event.target.value))
   }

   const addNewQuestion = () => {
      dispatch(testCreaterActions.addNewQuestion())
   }

   const onSaveTest = () => {
      dispatch(
         saveTest({
            testName,
            questionRequestList: questionRequestList.map((question) => {
               return {
                  question: question.question,
                  questionType: question.questionType,
                  variants: question.variants.map((variant) => {
                     return {
                        option: variant.option,
                        choiceAnswer: variant.choiceAnswer,
                     }
                  }),
               }
            }),
            disable: true,
            lessonsId: Number(lessonId),
         })
      )
      navigate(``)
   }

   return (
      <div>
         <TestName onChangeTestName={onChangeName} value={testName} />
         {questionRequestList.map((question, index) => {
            return (
               <TestItem
                  key={question.id}
                  index={index + 1}
                  questionValue={question.question}
                  questionType={question.questionType}
                  id={question.id}
                  variants={question.variants}
               />
            )
         })}
         <StyledButtonsWrapper>
            <div>
               <Buttons
                  background="transparent"
                  border="1px solid #3772FF"
                  fontcolor="#3772FF"
                  hoverback="none"
               >
                  Отмена
               </Buttons>
               <Buttons onClick={onSaveTest}>Сохранить</Buttons>
            </div>
         </StyledButtonsWrapper>
         <StyledButton onClick={addNewQuestion}>
            <PlusIcon />
         </StyledButton>
      </div>
   )
}

const StyledButtonsWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
   & div {
      width: 30%;
      display: flex;
      justify-content: space-between;
   }
`

const StyledButton = styled.button`
   width: 60px;
   height: 60px;
   background: linear-gradient(225deg, #fa2b56 0%, #f91c3d 100%);
   outline: none;
   border: none;
   border-radius: 100%;
   position: fixed;
   left: 93vw;
   bottom: 150px;
`
