import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams, useNavigate, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { getMaterialsByCourseId } from '../../store/instructorCoursesSlice'
import { FlexCards } from '../UI/FlexCards'
import LessonCard from '../UI/LessonCard'
import { Buttons } from '../UI/Buttons'
import { BreadCrumb } from '../UI/BreadCrumb'
import { MODAL_TYPES } from '../../utils/constants/constants'
import { IndexModal } from './INSTRUCTOR_MODALS/IndexModal'

export const InstructorMaterials = ({ courseId }) => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const tabs = searchParams.get('tabs')
   const { materials } = useSelector((store) => store.instructorSlice)
   useEffect(() => {
      dispatch(getMaterialsByCourseId(courseId))
   })

   const addNewLesson = () => {
      setSearchParams({ tabs, modal: MODAL_TYPES.ADDNEWLESSON })
   }

   return (
      <>
         <Flex>
            <BreadCrumb />
            <Buttons onClick={addNewLesson}>добавить урок</Buttons>
         </Flex>
         <FlexCards>
            {materials.map((lesson) => {
               return <LessonCard />
            })}
         </FlexCards>
         <IndexModal />
      </>
   )
}

const Flex = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;
`
