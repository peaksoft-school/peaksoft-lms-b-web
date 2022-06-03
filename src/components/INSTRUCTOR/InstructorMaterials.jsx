import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import {
   addNewLessonByCourseId,
   addVideoForLesson,
   deleteLessonById,
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
   const navigate = useNavigate()
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

   const openDeleteLessonModal = (lessonId) => {
      setSearchParams({ tabs, modal: MODAL_TYPES.DELETELESSON, lessonId })
   }

   const deleteLesson = (lessonId) => {
      dispatch(deleteLessonById(lessonId))
   }

   const addVideo = (videoLessonData) => {
      dispatch(addVideoForLesson(videoLessonData))
   }

   const openVideoPreview = (lessonId) => {
      navigate(`previewPage/${lessonId}`)
   }

   const openTasksPreview = (lessonId) => {
      navigate(`previewPage/${lessonId}`)
   }

   return (
      <>
         <Flex>
            <BreadCrumb />
            <Buttons onClick={openLessonModal}>добавить урок</Buttons>
         </Flex>
         <FlexCards>
            {materials.map((lesson) => {
               return (
                  <LessonCard
                     openTaskHandler={() => openTasksPreview(lesson.id)}
                     openVideoHandler={() => openVideoPreview(lesson.id)}
                     onDeleteHandler={() => openDeleteLessonModal(lesson.id)}
                     lessonName={lesson.name}
                     lessonId={lesson.id}
                  />
               )
            })}
         </FlexCards>
         <IndexModal
            onAddVideoLesson={addVideo}
            deleteLesson={deleteLesson}
            onAddNewLesson={addNewLesson}
         />
      </>
   )
}

const Flex = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;
`
