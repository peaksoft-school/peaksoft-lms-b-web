import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TestName } from './TestName'
import { TestItem } from './TestItem'
import { testCreaterActions } from '../../../store/testCreaterSlice'

export const TestEditor = () => {
   const dispatch = useDispatch()
   const { testName, questionRequestList } = useSelector(
      (store) => store.testCreaterSlice
   )

   const onChangeName = (event) => {
      dispatch(testCreaterActions.changeTestName(event.target.value))
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
      </div>
   )
}
