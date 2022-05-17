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
