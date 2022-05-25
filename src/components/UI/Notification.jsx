import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function TransitionRight(props) {
   return <Slide {...props} direction="left" />
}

export const Notification = ({ isActive, title, notificationType }) => {
   const [transition, setTransition] = React.useState(undefined)
   useEffect(() => {
      setTransition(() => TransitionRight)
   })
   const [state, setState] = React.useState({
      vertical: 'top',
      horizontal: 'right',
   })

   const { vertical, horizontal } = state

   const handleClose = () => {
      setState({ ...state })
   }

   return (
      <Snackbar
         anchorOrigin={{ vertical, horizontal }}
         open={isActive}
         TransitionComponent={transition}
         onClose={handleClose}
         message={title}
         key={vertical + horizontal}
      >
         <Alert severity={notificationType}>{title}</Alert>
      </Snackbar>
   )
}
