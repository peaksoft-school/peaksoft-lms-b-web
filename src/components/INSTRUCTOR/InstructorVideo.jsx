import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ReactPlayer from 'react-player'
import { getVideoLessonByLessonid } from '../../store/instructorCoursesSlice'

const InstructorVideo = () => {
   const dispatch = useDispatch()
   const { lessonId } = useParams()
   useEffect(() => {
      dispatch(getVideoLessonByLessonid(lessonId))
   }, [])
   const videoLesson = useSelector((store) => store.instructorSlice.videoLesson)

   console.log(videoLesson)

   return (
      <div>
         {videoLesson ? (
            <>
               <StyledHeader>{videoLesson.name}</StyledHeader>
               <StyledParagraph>{videoLesson.name}</StyledParagraph>
               <ReactPlayer borderRadius controls url={videoLesson.link} />
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
   margin-bottom: 16px;
`

const StyledHeader = styled.h1`
   font-family: var(--base-font);
   font-size: 20px;
   line-height: 40px;
   letter-spacing: 0.4px;
   margin-bottom: 20px;
`

export default InstructorVideo
