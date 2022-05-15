import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import { ReactComponent as MeetBallIcon } from '../../assets/icons/option.svg'

const StyledMenu = styled((props) => (
   <Menu
      elevation={0}
      anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'right',
      }}
      transformOrigin={{
         vertical: 'top',
         horizontal: 'right',
      }}
      {...props}
   />
))(({ theme }) => ({
   '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
         theme.palette.mode === 'light'
            ? 'rgb(55, 65, 81)'
            : theme.palette.grey[300],
      boxShadow:
         'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
         padding: '10px 0',
      },
      '& .MuiMenuItem-root': {
         '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
         },
         '&:active': {
            backgroundColor: alpha(
               theme.palette.primary.main,
               theme.palette.action.selectedOpacity
            ),
         },
      },
   },
}))

export const MeetBalls = ({
   open,
   handleClick,
   handleClose,
   anchorEl,
   option,
   onAction,
}) => {
   return (
      <div>
         <IconButton
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            onClick={handleClick}
            color="primary"
            aria-label="upload picture"
            component="span"
         >
            <MeetBallIcon />
         </IconButton>

         <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
               'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
         >
            {option.map((item) => {
               return (
                  <MenuItem
                     key={item.id}
                     onClick={() => onAction(item.action)}
                     disableRipple
                  >
                     {item.content}
                  </MenuItem>
               )
            })}
         </StyledMenu>
      </div>
   )
}
