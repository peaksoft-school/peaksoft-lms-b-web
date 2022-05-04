import * as React from 'react'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

export const Switcher = styled((props) => <Switch {...props} />)(() => ({
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
            backgroundColor: '#FFFFFF',
         },
      },
   },
   '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 1,
      backgroundColor: '#FFFFFF',
   },
}))
