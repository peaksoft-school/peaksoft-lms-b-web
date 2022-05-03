import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { Title } from './Title'
import { SelectedItem } from './SelectedItem'

const StyledSelect = styled(Select)`
   select {
      border: 1px solid green;
   }
`

const names = [
   {
      name: 'Oliver Hansen',
      id: Math.random().toString(),
   },
   {
      name: 'Jetigen',
      id: Math.random().toString(),
   },
   {
      name: 'Beybars',
      id: Math.random().toString(),
   },
]

export const MultiSelect = () => {
   const [personName, setPersonName] = React.useState([])
   const [selectedUsers, setSelectedUsers] = React.useState([])

   const handleChange = (event) => {
      const {
         target: { value },
      } = event
      setPersonName(typeof value === 'string' ? value.split(',') : value)
   }

   const addHandler = () => {
      setSelectedUsers((prev) => [...prev, ...personName])
      setPersonName([])
   }

   const deleteHandler = (id) => {
      setSelectedUsers((prev) => prev.filter((teacher) => teacher.id !== id))
   }

   return (
      <Box>
         <Box>
            {selectedUsers.map((user) => {
               return (
                  <SelectedItem
                     userInfo={user.name}
                     onDelete={() => deleteHandler(user.id)}
                  />
               )
            })}
         </Box>
         <FormControl fullWidth>
            <StyledSelect
               multiple
               displayEmpty
               value={personName}
               onChange={handleChange}
               onClose={addHandler}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <Title>Multi select</Title>
                  }
                  return selected.join(', ')
               }}
               inputProps={{ 'aria-label': 'Without label' }}
            >
               <MenuItem disabled value="">
                  <Title>Группа</Title>
               </MenuItem>
               {names.map((user) => (
                  <MenuItem key={user.id} value={user.name}>
                     {user.name}
                  </MenuItem>
               ))}
            </StyledSelect>
            {/* <Title color="red">asdasdsd</Title> */}
         </FormControl>
      </Box>
   )
}
