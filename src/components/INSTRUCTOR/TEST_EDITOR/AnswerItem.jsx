import React from 'react'
import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import { useDispatch } from 'react-redux'
import { Inputs } from '../../UI/Input'
import { RadioButton } from '../../UI/RadioButton'
import { testCreaterActions } from '../../../store/testCreaterSlice'

export const AnswerItem = ({
   isChecked,
   inputValue,
   optionId,
   questionType,
   questionId,
   placeholder,
}) => {
   const dispatch = useDispatch()
   const onChangeOptionValue = (event) => {
      dispatch(
         testCreaterActions.changeOptionValue({
            optionId,
            questionId,
            value: event.target.value,
         })
      )
   }

   const onToggleRadioButton = () => {
      dispatch(testCreaterActions.toggleRadioButton({ optionId, questionId }))
   }

   const onToggleCheckbox = () => {
      dispatch(testCreaterActions.toggleCheckbox({ optionId, questionId }))
   }
   return (
      <StyledAnswerItem>
         {questionType === 'SINGLE' ? (
            <RadioButton checked={isChecked} onChange={onToggleRadioButton} />
         ) : (
            <Checkbox checked={isChecked} onChange={onToggleCheckbox} />
         )}
         <Inputs
            placeholder={placeholder}
            width="95%"
            onChange={onChangeOptionValue}
            value={inputValue}
         />
      </StyledAnswerItem>
   )
}

export const StyledAnswerItem = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 24px;
`
