import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export const SearchInput = ({ value, onChange }) => {
   return (
      <Paper
         component="form"
         sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            marginBottom: '15px',
         }}
      >
         <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
         </IconButton>
         <InputBase
            value={value}
            onChange={onChange}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Введите имя студента"
            inputProps={{ 'aria-label': 'search google maps' }}
         />
      </Paper>
   )
}
