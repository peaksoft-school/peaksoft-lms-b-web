import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

<<<<<<< HEAD
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
=======
const StyledNotification = styled.div`
   background-color: ${({ backColor }) =>
      backColor === 'succes' ? '#36AC0C' : '#C91E1E'};
   width: 30vh;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   border-radius: 10px;
   padding: 15px;
`
const StyledTitle = styled.h3`
   margin: 0;
   color: white;
   margin-right: 10px;
   font-size: 16px;
   font-family: var(--base-font);
`
>>>>>>> 5086d4338d714bd7e8a98e1ffab2770106e78a4e

   return (
<<<<<<< HEAD
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
=======
      <StyledNotification backColor={backColor}>
         <StyledTitle className="title">{title}</StyledTitle>
         {icon}
      </StyledNotification>
>>>>>>> 5086d4338d714bd7e8a98e1ffab2770106e78a4e
   )
}

// import styled from 'styled-components'

// const StyledNotification = styled.div`
//    background-color: ${({ backColor }) =>
//       backColor === 'succes' ? '#36AC0C' : '#C91E1E'};
//    width: fit-content;
//    display: flex;
//    align-items: center;
//    text-align: center;
//    justify-content: center;
//    flex-wrap: wrap;
//    gap: 10px;
//    border-radius: 10px;
//    padding: 10px;
//    position: absolute;
//    top: 40px;
//    left: 50%;
//    transform: translate(-50%, -50%);

//    .title {
//       margin: 0;
//       color: white;
//       font-weight: 200;
//       font-size: 15px;
//       font-family: var(--base-font);
//    }
// `

// export const Notification = ({ title, backColor, icon }) => {
//    return (
//       <StyledNotification backColor={backColor}>
//          <h3 className="title">{title}</h3>
//          {icon}
//       </StyledNotification>
//    )
// }
