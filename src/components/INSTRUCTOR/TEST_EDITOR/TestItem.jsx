import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import { Inputs } from '../../UI/Input'
import { RadioButton } from '../../UI/RadioButton'
import { AnswerItem } from './AnswerItem'

export const TestItem = () => {
   return (
      <StyledTestItem>
         <OptionsWrapper>
            <Counter>1</Counter>
            <Inputs placeholder="Вопрос" width="100%" />
            <FormControl>
               <StyledRadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
               >
                  <FormControlLabel
                     label="Один из списка"
                     control={<RadioButton />}
                     value="one"
                     defaultValue="start"
                  />
                  <FormControlLabel
                     label="Несколько из списка"
                     control={<RadioButton />}
                     value="multiple"
                     defaultValue="end"
                  />
               </StyledRadioGroup>
            </FormControl>
         </OptionsWrapper>
         <AnswerItem />
         <AnswerItem />
         <AnswerItem />
      </StyledTestItem>
   )
}

const StyledTestItem = styled.div`
   background-color: white;
   border-radius: 10px;
   width: 100%;
   padding: 20px;
   border: 1px solid #d4d4d4;
`
const OptionsWrapper = styled.div`
   display: grid;
   grid-template-columns: 0.1fr 1.5fr 1fr;
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
