import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getMaterialsByCourseId } from '../../store/instructorCoursesSlice'
import { FlexCards } from '../UI/FlexCards'
import LessonCard from '../UI/LessonCard'

export const InstructorMaterials = ({ courseId }) => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getMaterialsByCourseId(courseId))
   })
   return (
      <FlexCards>
         <LessonCard />
         <LessonCard />
         <LessonCard />
      </FlexCards>
   )
}
