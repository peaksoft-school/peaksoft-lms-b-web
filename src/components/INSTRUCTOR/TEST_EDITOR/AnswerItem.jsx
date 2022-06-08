import React from 'react'
import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import { useDispatch } from 'react-redux'
import { Inputs } from '../../UI/Input'
import { RadioButton } from '../../UI/RadioButton'
import { testCreaterActions } from '../../../store/testCreaterSlice'
import { ReactComponent as DeleteAnswerIcon } from '../../../assets/icons/DeleteAnswerIcon.svg'

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

   const onDeleteAnswer = () => {
      dispatch(testCreaterActions.deleteAnswer({ optionId, questionId }))
   }
   return (
      <StyledAnswerItem>
         {questionType === 'SINGLE' ? (
            <RadioButton checked={isChecked} onChange={onToggleRadioButton} />
         ) : (
            <Checkbox checked={isChecked} onChange={onToggleCheckbox} />
         )}
         <StyledInputWrapper>
            <StyledInput
               value={inputValue}
               onChange={onChangeOptionValue}
               placeholder={placeholder}
            />
            <DeleteAnswerIcon onClick={onDeleteAnswer} />
         </StyledInputWrapper>
      </StyledAnswerItem>
   )
}

const StyledAnswerItem = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 24px;
`

const StyledInputWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border: 1px solid var(--grey-border-color);
   border-radius: 10px;
   &:focus-within {
      border: 1px solid var(--blue-border-color);
   }
`

const StyledInput = styled.input`
   font-family: var(--base-font);
   height: 100%;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   width: 97%;
   border-radius: 10px;
   outline: none;
   border: none;
   padding: 10px 8px 10px 18px;
`
