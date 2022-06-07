import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import { useDispatch } from 'react-redux'
import { Inputs } from '../../UI/Input'
import { RadioButton } from '../../UI/RadioButton'
import { AnswerItem } from './AnswerItem'
import { testCreaterActions } from '../../../store/testCreaterSlice'

export const TestItem = ({
   index,
   questionValue,
   questionType,
   variants = [],
   id,
}) => {
   const dispatch = useDispatch()
   const onChangeQuestionName = (event) => {
      dispatch(
         testCreaterActions.changeQuestionValue({
            questionId: id,
            value: event.target.value,
         })
      )
   }
   const onChangeQuestionType = (event) => {
      dispatch(
         testCreaterActions.changeQuestionType({
            questionId: id,
            type: event.target.value,
         })
      )
   }

   const addNewVariant = () => {
      dispatch(testCreaterActions.addNewVariantToQuestion(id))
   }
   return (
      <StyledTestItem>
         <OptionsWrapper>
            <Counter>{index}</Counter>
            <Inputs
               value={questionValue}
               onChange={onChangeQuestionName}
               placeholder="Вопрос"
               width="100%"
            />
            <FormControl>
               <StyledRadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={questionType}
                  onChange={onChangeQuestionType}
               >
                  <FormControlLabel
                     label="Один из списка"
                     control={<RadioButton />}
                     value="SINGLE"
                     defaultValue="start"
                  />
                  <FormControlLabel
                     label="Несколько из списка"
                     control={<RadioButton />}
                     value="MULTIPLE"
                     defaultValue="end"
                  />
               </StyledRadioGroup>
            </FormControl>
         </OptionsWrapper>
         {variants.map((answer, index) => {
            return (
               <AnswerItem
                  questionType={questionType}
                  key={answer.id}
                  isChecked={answer.choiceAnswer}
                  optionId={answer.id}
                  questionId={id}
                  inputValue={answer.options}
                  placeholder={`Вариант ${index + 1}`}
               />
            )
         })}
         <StyledWrapper>
            <StyledAddVariant onClick={addNewVariant}>
               Добавить вариант{' '}
            </StyledAddVariant>
            или
            <StyledOtherVariant> Добавить вариант `Другое`</StyledOtherVariant>
         </StyledWrapper>
      </StyledTestItem>
   )
}

const StyledTestItem = styled.div`
   background-color: white;
   border-radius: 10px;
   width: 100%;
   padding: 20px;
   border: 1px solid #d4d4d4;
   margin-bottom: 25px;
`
const OptionsWrapper = styled.div`
   display: grid;
   grid-template-columns: 0.09fr 1.1fr 0.6fr;
   align-items: center;
`

const Counter = styled.h1`
   font-family: var(--base-font);
   color: #1f6ed4;
   font-size: 25px;
`

const StyledRadioGroup = styled(RadioGroup)`
   display: flex;
   justify-content: space-around;
`

const StyledWrapper = styled.p`
   margin-top: 24px;
   font-family: var(--base-font);
   color: black;
`

const StyledOtherVariant = styled.span`
   color: #1f6ed4;
   cursor: pointer;
`

const StyledAddVariant = styled.span`
   color: #d4d4d4;
   cursor: pointer;
`
