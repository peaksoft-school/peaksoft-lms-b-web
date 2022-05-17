import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function CustomizedNotification() {
   const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
   })

   const { vertical, horizontal, open } = state

   const handleClick = (newState) => () => {
      setState({ open: true, ...newState })
   }

   const handleClose = () => {
      setState({ ...state, open: false })
   }

   return (
      <Stack spacing={2} sx={{ width: '100%' }}>
         <Button
            variant="outlined"
            onClick={handleClick({
               vertical: 'top',
               horizontal: 'right',
            })}
         >
            Open success snackbar
         </Button>
         <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
         >
            <Alert
               onClose={handleClose}
               severity="error"
               sx={{ width: '100%' }}
            >
               This is a success message!
            </Alert>
         </Snackbar>
      </Stack>
   )
}
