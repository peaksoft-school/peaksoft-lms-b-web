import * as React from 'react'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const IOSSwitch = styled((props) => (
   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
   width: 42,
   height: 26,
   padding: 0,
   '& .MuiSwitch-switchBase': {
      padding: 0,
      color: '#C91E1E',
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: '#36AC0C',
         '& + .MuiSwitch-track': {
            backgroundColor: '#E9E9EA',
            opacity: 1,
            border: 0,
         },
      },
   },
   '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === '#fffff' ? '#E9E9EA' : '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
         duration: 500,
      }),
   },
}))

export const Switches = () => {
   return <IOSSwitch sx={{ m: 5 }} defaultChecked />
}
