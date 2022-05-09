import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { Box, Menu } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { BiUser, BiLogOut } from 'react-icons/bi'
import { ReactComponent as Avatar } from '../../assets/icons/Profile.svg'
import { Title } from './Title'
import { ReactComponent as Arrow } from '../../assets/icons/ArrowDown.svg'

export const Profile = ({ title, onLogout }) => {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   const logoutHandler = () => {
      onLogout()
      handleClose()
   }
   return (
      <Box
         width="195px"
         display="flex"
         alignItems="center"
         justifyContent="space-between"
      >
         <Avatar />
         <Title cursor="pointer" fontWeight="400" fontSize="16px">
            {title}
         </Title>
         <Arrow cursor="pointer" onClick={handleClick} />
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            <MenuItem onClick={handleClose}>
               <ListItemIcon>
                  <BiUser />
               </ListItemIcon>
               <ListItemText>My account</ListItemText>
            </MenuItem>
            <MenuItem onClick={logoutHandler}>
               <ListItemIcon>
                  <BiLogOut />
               </ListItemIcon>
               <ListItemText>Logout</ListItemText>
            </MenuItem>
         </Menu>
      </Box>
   )
}
