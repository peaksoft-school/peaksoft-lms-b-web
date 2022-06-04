import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { ListItem, ListItemText, Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { CardSettings } from './LessonSettings'
import { LessonTypeForm } from './LessonTypeForm'
import { ReactComponent as DeleteIcon } from '../../assets/icons/DeleteIcon.svg'
import { ReactComponent as ReedIcon } from '../../assets/icons/ReedIcon.svg'
import { ReactComponent as VideoIcon } from '../../assets/icons/VideoIcon.svg'
import { ReactComponent as PrezentationIcon } from '../../assets/icons/PrezentationIcon.svg'
import { ReactComponent as HmIcon } from '../../assets/icons/HmIcon.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/LinkIcon.svg'
import { ReactComponent as TestIcon } from '../../assets/icons/TestIcon.svg'
import { MODAL_TYPES } from '../../utils/constants/constants'

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

export const LessonCard = ({
   lessonName,
   lessonId,
   taskId,
   linkId,
   testId,
   videoId,
   presentationId,
   onEditHandler,
   onDeleteHandler,
   openVideoHandler,
   openPresentationHandler,
   openTaskHandler,
   openLinkHandler,
   openTestHandler,

   ...otherProps
}) => {
   const navigate = useNavigate()
   const [searchParams, setSearchParams] = useSearchParams()
   const tabs = searchParams.get('tabs')
   const [value, setValue] = useState('')
   const SELECT_PATHS = {
      10: {
         action: () => {
            setSearchParams({
               modal: MODAL_TYPES.ADDVIDEOFORLESSON,
               tabs,
               lessonId,
            })
         },
      },
      20: {
         action: () => {
            setSearchParams({
               modal: MODAL_TYPES.ADDPREZENTATIONFORLESSON,
               tabs,
               lessonId,
            })
         },
      },
      30: {
         action: () => {
            navigate(`addTasksForLesson/${lessonId}`)
         },
      },
      40: {
         action: () => {
            setSearchParams({
               modal: MODAL_TYPES.ADDLINKFORLESSON,
               tabs,
               lessonId,
            })
         },
      },
      50: {
         action: () => {
            navigate(`addTestForLesson/${lessonId}`)
         },
      },
   }
   useEffect(() => {
      if (value) SELECT_PATHS[value].action()
   }, [value])

   const selectChangeHandler = (event) => {
      setValue(event.target.value)
   }

   return (
      <Box sx={style}>
         <List {...otherProps}>
            <ListItem>
               <Button>
                  <ReedIcon onClick={onEditHandler} />
               </Button>
               <StyledTitle primary={lessonName} />
               <LessonTypeForm
                  value={value}
                  handleChange={selectChangeHandler}
               />
               <Button>
                  <DeleteIcon onClick={onDeleteHandler} />
               </Button>
            </ListItem>
         </List>

         <Divider />

         <List>
            <ListItemButton
               disabled={!videoId}
               onClick={openVideoHandler}
               disableRipple
            >
               <VideoIcon />
               <StyledText primary="Видеоурок" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton
               disabled={!presentationId}
               onClick={openPresentationHandler}
               disableRipple
            >
               <PrezentationIcon />
               <StyledText primary="Презентация" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton
               disabled={!taskId}
               onClick={openTaskHandler}
               disableRipple
            >
               <HmIcon />
               <StyledText primary="Задание" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton
               disabled={!linkId}
               onClick={openLinkHandler}
               disableRipple
            >
               <LinkIcon />
               <StyledText primary="Ссылка" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton
               disabled={!testId}
               onClick={openTestHandler}
               disableRipple
            >
               <TestIcon />
               <StyledText primary="Тест" />
               <CardSettings />
            </ListItemButton>
         </List>
      </Box>
   )
}
