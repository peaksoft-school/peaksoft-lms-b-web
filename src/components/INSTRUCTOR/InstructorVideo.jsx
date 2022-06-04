import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ReactPlayer from 'react-player'
import {
   getVideoLessonByVideoId,
   InstructorActions,
} from '../../store/instructorCoursesSlice'

const InstructorVideo = () => {
   const dispatch = useDispatch()
   const { subtaskId } = useParams()
   useEffect(() => {
      dispatch(getVideoLessonByVideoId(subtaskId))
      return () => {
         dispatch(InstructorActions.clearVideoLesson())
      }
   }, [])
   const videoLesson = useSelector((store) => store.instructorSlice.videoLesson)

   return (
      <div>
         {videoLesson ? (
            <>
               <StyledHeader>{videoLesson.name}</StyledHeader>
               <StyledParagraph>{videoLesson.description}</StyledParagraph>
               <StyledPleyerWrapper>
                  <ReactPlayer
                     width="792px"
                     height="464px"
                     borderRadius
                     controls
                     url={videoLesson.link}
                  />
               </StyledPleyerWrapper>
            </>
         ) : (
            <StyledHeader>Video Not Found</StyledHeader>
         )}
      </div>
   )
}

const StyledParagraph = styled.p`
   word-break: break-all;
   max-width: 797px;
   font-family: var(--base-font);
   font-size: 15px;
   margin-bottom: 20px;
`

const StyledHeader = styled.h1`
   font-family: var(--base-font);
   font-size: 20px;
   line-height: 40px;
   letter-spacing: 0.4px;
   margin-bottom: 20px;
`

const StyledPleyerWrapper = styled.div`
   margin-bottom: 100px;
`

export default InstructorVideo
