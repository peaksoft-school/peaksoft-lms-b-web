import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'

const StyledFormControl = styled(FormControl)`
   &.css-1nrlq1o-MuiFormControl-root {
      min-width: 141px;
      margin-right: 4px;
   }
`

const StyledInputLabel = styled(InputLabel)`
   &.MuiInputLabel-root {
      font-size: 12;
      margin-top: 0.5px;
   }
`

export function LessonTypeForm({
   open,
   value,
   handleChange,
   handleClose,
   handleOpen,
}) {
   return (
      <div>
         <StyledFormControl>
            <StyledInputLabel id="open-select-label" variant="outlined">
               Добавить
            </StyledInputLabel>
            <Select
               labelId="dopen-select-label"
               id="open-select"
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={value}
               label="value"
               onChange={handleChange}
            >
               <MenuItem value={10}>Видеоурок</MenuItem>
               <MenuItem value={20}>Презентация</MenuItem>
               <MenuItem value={30}>Задание</MenuItem>
               <MenuItem value={40}>Ссылка</MenuItem>
               <MenuItem value={50}>Тест</MenuItem>
            </Select>
         </StyledFormControl>
      </div>
   )
}
