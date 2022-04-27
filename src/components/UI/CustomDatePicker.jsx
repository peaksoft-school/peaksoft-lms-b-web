import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'

const StyledDatePicker = styled(DatePicker)``

const StyledTextField = styled(TextField)`
   .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 15px;
   }
`

export const CustomDatePicker = () => {
   const [value, setValue] = useState(null)
   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <StyledDatePicker
            value={value}
            onChange={(newValue) => {
               setValue(newValue)
            }}
            renderInput={(params) => (
               <StyledTextField
                  sx={{
                     '& .MuiOutlinedInput-root.Mui-focused': {
                        '& > fieldset': {
                           borderColor: 'black',
                        },
                     },
                  }}
                  border="none"
                  {...params}
               />
            )}
         />
      </LocalizationProvider>
   )
}
