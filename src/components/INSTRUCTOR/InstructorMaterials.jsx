import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import {
   addNewLessonByCourseId,
   getMaterialsByCourseId,
} from '../../store/instructorCoursesSlice'
import { FlexCards } from '../UI/FlexCards'
import LessonCard from '../UI/LessonCard'
import { Buttons } from '../UI/Buttons'
import { BreadCrumb } from '../UI/BreadCrumb'
import { MODAL_TYPES } from '../../utils/constants/constants'
import { IndexModal } from './INSTRUCTOR_MODALS/IndexModal'

export const InstructorMaterials = ({ coursesId }) => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const tabs = searchParams.get('tabs')
   const { materials } = useSelector((store) => store.instructorSlice)
   useEffect(() => {
      dispatch(getMaterialsByCourseId(coursesId))
   }, [])

   const openLessonModal = () => {
      setSearchParams({ tabs, modal: MODAL_TYPES.ADDNEWLESSON })
   }

   const addNewLesson = (lessonName) => {
      dispatch(
         addNewLessonByCourseId({ name: lessonName, courseId: coursesId })
      )
   }

   return (
      <>
         <Flex>
            <BreadCrumb />
            <Buttons onClick={openLessonModal}>добавить урок</Buttons>
         </Flex>
         <FlexCards>
            {materials.map((lesson) => {
               return <LessonCard lessonName={lesson.name} />
            })}
         </FlexCards>
         <IndexModal onAddNewLesson={addNewLesson} />
      </>
   )
}

const Flex = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;
`
