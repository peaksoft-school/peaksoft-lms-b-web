import * as React from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { ListItem, ListItemText, Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'
import { CardSettings } from './LessonSettings'
import { LessonTypeForm } from './LessonTypeForm'

const StyledText = styled(ListItemText)`
   span {
      font-family: Open Sans;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
      padding-left: 15px;
   }
`

const StyledTitle = styled(ListItemText)`
   span {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #000000;
      padding-left: 15px;
   }
`

const style = {
   width: '44%',
   height: 360,
   bgcolor: 'background.paper',
   border: '1px solid #EBEBEB',
   borderRadius: '10px',
}

export default function LessonCard({
   onEditHandler,
   onDeleteHandler,
   openVideoHandler,
   openPresentationHandler,
   openTaskHandler,
   openLinkHandler,
   openTestHandler,
   ...otherProps
}) {
   return (
      <Box sx={style}>
         <List {...otherProps}>
            <ListItem>
               <Button>{/* <Reeditsvg onClick={onEditHandler} /> */}</Button>
               <StyledTitle primary="LESSON_1" />
               <LessonTypeForm />
               <Button>{/* <Deletesvg onClick={onDeleteHandler} /> */}</Button>
            </ListItem>
         </List>

         <Divider />

         <List>
            <ListItemButton onClick={openVideoHandler} disableRipple>
               {/* <Videosvg /> */}
               <StyledText primary="Видеоурок" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openPresentationHandler} disableRipple>
               {/* <Presentationsvg /> */}
               <StyledText primary="Презентация" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openTaskHandler} disableRipple>
               {/* <Tasksvg /> */}
               <StyledText primary="Задание" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openLinkHandler} disableRipple>
               {/* <Linksvg /> */}
               <StyledText primary="Ссылка" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openTestHandler} disableRipple>
               {/* <Testsvg /> */}
               <StyledText primary="Тест" />
               <CardSettings />
            </ListItemButton>
         </List>
      </Box>
   )
}
