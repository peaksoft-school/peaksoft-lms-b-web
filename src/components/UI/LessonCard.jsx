import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { ListItem, ListItemText, Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'
import { CardSettings } from './LessonSettings'
import { LessonTypeForm } from './LessonTypeForm'
import { ReactComponent as DeleteIcon } from '../../assets/icons/DeleteIcon.svg'
import { ReactComponent as ReedIcon } from '../../assets/icons/ReedIcon.svg'
import { ReactComponent as VideoIcon } from '../../assets/icons/VideoIcon.svg'
import { ReactComponent as PrezentationIcon } from '../../assets/icons/PrezentationIcon.svg'
import { ReactComponent as HmIcon } from '../../assets/icons/HmIcon.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/LinkIcon.svg'
import { ReactComponent as TestIcon } from '../../assets/icons/TestIcon.svg'

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
   bgcolor: 'background.paper',
   border: '1px solid #EBEBEB',
   borderRadius: '10px',
}

export default function LessonCard({
   lessonName,
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
               <Button>
                  <ReedIcon onClick={onEditHandler} />
               </Button>
               <StyledTitle primary={lessonName} />
               <LessonTypeForm />
               <Button>
                  <DeleteIcon onClick={onDeleteHandler} />
               </Button>
            </ListItem>
         </List>

         <Divider />

         <List>
            <ListItemButton onClick={openVideoHandler} disableRipple>
               <VideoIcon />
               <StyledText primary="Видеоурок" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openPresentationHandler} disableRipple>
               <PrezentationIcon />
               <StyledText primary="Презентация" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openTaskHandler} disableRipple>
               <HmIcon />
               <StyledText primary="Задание" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openLinkHandler} disableRipple>
               <LinkIcon />
               <StyledText primary="Ссылка" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={openTestHandler} disableRipple>
               <TestIcon />
               <StyledText primary="Тест" />
               <CardSettings />
            </ListItemButton>
         </List>
      </Box>
   )
}
