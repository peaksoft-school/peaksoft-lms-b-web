import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Title } from './Title'

const names = [
   'Oliver Hansen',
   'Van Henry',
   'April Tucker',
   'Ralph Hubbard',
   'Omar Alexander',
   'Carlos Abbott',
   'Miriam Wagner',
   'Bradley Wilkerson',
   'Virginia Andrews',
   'Kelly Snyder',
]

export default function MultipleSelectPlaceholder() {
   const [personName, setPersonName] = React.useState([])

   const handleChange = (event) => {
      const {
         target: { value },
      } = event
      setPersonName(typeof value === 'string' ? value.split(',') : value)
   }

   return (
      <div>
         <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
               multiple
               displayEmpty
               value={personName}
               onChange={handleChange}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <Title>Группа</Title>
                  }
                  return selected.join(', ')
               }}
               inputProps={{ 'aria-label': 'Without label' }}
            >
               <MenuItem disabled value="">
                  <Title>Группа</Title>
               </MenuItem>
               {names.map((name) => (
                  <MenuItem key={name} value={name}>
                     {name}
                  </MenuItem>
               ))}
            </Select>
            {/* <Title color="red">asdasdsd</Title> */}
         </FormControl>
      </div>
   )
}
