import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import {
   addLinkToLesson,
   addNewLessonByCourseId,
   addPresentationForLesson,
   addVideoForLesson,
   deleteLessonById,
   getMaterialsByCourseId,
   getPresentationById,
} from '../../store/instructorCoursesSlice'
import { FlexCards } from '../UI/FlexCards'
import { Buttons } from '../UI/Buttons'
import { BreadCrumb } from '../UI/BreadCrumb'
import { MODAL_TYPES } from '../../utils/constants/constants'
import { IndexModal } from './INSTRUCTOR_MODALS/IndexModal'
import { sendTaskFile } from '../../store/InstructorTaskCreaterSlice'
import { LessonCard } from '../UI/LessonCard'

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

   const openVideoPreview = (videoLessonId) => {
      if (videoLessonId) {
         navigate(`previewPage/${videoLessonId}?view=video`)
      }
   }

   const openTasksPreview = (taskId) => {
      if (taskId) {
         navigate(`previewPage/${taskId}?view=task`)
      }
   }

   const addLink = (linkData) => {
      dispatch(addLinkToLesson(linkData))
   }

   const addPresentation = async (presentationData) => {
      if (presentationData) {
         const { URL } = await dispatch(
            sendTaskFile(presentationData.file)
         ).unwrap()
         dispatch(
            addPresentationForLesson({
               ...presentationData,
               file: URL,
            })
         )
      }
   }

   const getPresentation = (presentationId) => {
      if (presentationId) {
         navigate(`previewPage/${presentationId}?view=presentation`)
      }
   }

   return (
      <>
         <Flex>
            <BreadCrumb />
            <Buttons onClick={openLessonModal}>добавить урок</Buttons>
         </Flex>
         <FlexCards>
            {materials.map((lesson) => {
               console.log(lesson.testId)
               return (
                  <LessonCard
                     openTaskHandler={() => openTasksPreview(lesson.taskId)}
                     openVideoHandler={() =>
                        openVideoPreview(lesson.videoLessonId)
                     }
                     openPresentationHandler={() =>
                        getPresentation(lesson.presentationId)
                     }
                     onDeleteHandler={() => openDeleteLessonModal(lesson.id)}
                     lessonName={lesson.name}
                     lessonId={lesson.id}
                     taskId={lesson.taskId}
                     linkId={lesson.linkId}
                     testId={lesson.testId}
                     videoId={lesson.videoLessonId}
                     presentationId={lesson.presentationId}
                  />
               )
            })}
         </FlexCards>
         <IndexModal
            onAddVideoLesson={addVideo}
            deleteLesson={deleteLesson}
            onAddNewLesson={addNewLesson}
            onAddPresentation={addPresentation}
            onAddLinkHandler={addLink}
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
