import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import { InputLabel } from '@mui/material'

export function BasicSelect({
   data,
   placeholder,
   onChange,
   value,
   selectOption,
}) {
   return (
      <FormControlForSelect>
         <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={placeholder}
            onChange={onChange}
            value={value}
         >
            {data.map((item) => (
               <MenuItem
                  key={item.id}
                  value={item.title}
                  onClick={() => selectOption(item.title)}
               >
                  {item.title}
               </MenuItem>
            ))}
         </Select>
      </FormControlForSelect>
   )
}
const FormControlForSelect = styled(FormControl)`
   width: 100%;
   .MuiInputBase-root {
      border-radius: 10px;
      height: 42px;
   }
   .MuiInputLabel-root {
      top: -5px;
   }
`
