import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import ruLocale from 'date-fns/locale/ru'

const StyledDatePicker = styled(DatePicker)``

const StyledTextField = styled(TextField)`
   .MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 15px;
   }
`

export const CustomDatePicker = ({ value, setDate }) => {
   return (
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
         <StyledDatePicker
            value={value}
            onChange={(newValue) => {
               setDate(newValue)
            }}
            renderInput={(params) => (
               <StyledTextField border="none" {...params} />
            )}
         />
      </LocalizationProvider>
   )
}
