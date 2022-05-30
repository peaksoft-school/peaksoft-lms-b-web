import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams, useNavigate, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { getMaterialsByCourseId } from '../../store/instructorCoursesSlice'
import { FlexCards } from '../UI/FlexCards'
import LessonCard from '../UI/LessonCard'
import { Buttons } from '../UI/Buttons'
import { BreadCrumb } from '../UI/BreadCrumb'

export const InstructorMaterials = ({ courseId }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getMaterialsByCourseId(courseId))
   })

   const addNewLesson = () => {
      navigate(`createNewLesson`)
   }
   return (
      <>
         <Flex>
            <BreadCrumb />
            <Buttons onClick={addNewLesson}>добавить урок</Buttons>
         </Flex>
         <FlexCards>
            <LessonCard />
            <LessonCard />
            <LessonCard />
         </FlexCards>
      </>
   )
}

const Flex = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;
`
