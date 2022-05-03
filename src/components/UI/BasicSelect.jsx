import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import { InputLabel } from '@mui/material'

export function BasicSelect({ data, placeholder, onChoose }) {
   const [value, setValue] = React.useState('')
   const handleChange = (event) => {
      setValue(event.target.value)

      onChoose({
         ...event.target.value,
      })
   }
   return (
      <FormControlForSelect>
         <InputLabel sx={{ top: '-5px' }} id="demo-simple-select-label">
            {placeholder}
         </InputLabel>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={placeholder}
            onChange={handleChange}
            // InputLabelProps={{ shrink: false }}
         >
            {data.map((el) => (
               <MenuItem key={el.id} value={el}>
                  {el.title}
               </MenuItem>
            ))}
         </Select>
      </FormControlForSelect>
   )
}
const FormControlForSelect = styled(FormControl)`
   .MuiInputBase-root {
      border-radius: 10px;
      width: 491px;
      height: 42px;
   }
`
