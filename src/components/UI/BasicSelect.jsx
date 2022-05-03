import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import { InputLabel } from '@mui/material'

export function BasicSelect({ data, placeholder }) {
   const [value, setValue] = React.useState('')
   const handleChange = (event) => {
      setValue(event.target.value)
   }
   return (
      <Box>
         <FormControlForSelect>
            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={value}
               label={placeholder}
               onChange={handleChange}
               InputLabelProps={{ shrink: false }}
            >
               {data.map((el) => (
                  <MenuItem key={el.id} value={el.title}>
                     {el.title}
                  </MenuItem>
               ))}
            </Select>
         </FormControlForSelect>
      </Box>
   )
}
const FormControlForSelect = styled(FormControl)`
   .MuiInputBase-root {
      border-radius: 10px;
      height: 42px;
      width: 491px;
   }
`
