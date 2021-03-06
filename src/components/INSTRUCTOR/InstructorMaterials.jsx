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

   const openTestPreview = (testId) => {
      if (testId) {
         navigate(`previewPage/${testId}?view=test`)
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

   const deleteVideoLesson = (videoId) => {
      console.log(videoId)
   }

   const deletePresentation = (presentationId) => {
      console.log(presentationId)
   }

   const deleteTask = (taskId) => {
      console.log(taskId)
   }

   const deleteLink = (linkId) => {
      console.log(linkId)
   }

   const deleteTest = (testId) => {
      console.log(testId)
   }

   const editVideoLesson = (videoId) => {
      console.log(videoId)
   }

   const editPresentation = (presentationId) => {
      console.log(presentationId)
   }

   const editTask = (taskId) => {
      console.log(taskId)
   }

   const editLink = (linkId) => {
      console.log(linkId)
   }

   const editTest = (testId) => {
      console.log(testId)
   }

   return (
      <>
         <Flex>
            <BreadCrumb />
            <Buttons onClick={openLessonModal}>???????????????? ????????</Buttons>
         </Flex>
         <FlexCards>
            {materials.map((lesson) => {
               return (
                  <LessonCard
                     openTaskHandler={() => openTasksPreview(lesson.taskId)}
                     openVideoHandler={() =>
                        openVideoPreview(lesson.videoLessonId)
                     }
                     openPresentationHandler={() =>
                        getPresentation(lesson.presentationId)
                     }
                     openTestHandler={() => openTestPreview(lesson.testId)}
                     onDeleteHandler={() => openDeleteLessonModal(lesson.id)}
                     onDeleteVideoLesson={() =>
                        deleteVideoLesson(lesson.videoLessonId)
                     }
                     onDeleteLink={() => deleteLink(lesson.linkId)}
                     onDeletePresentation={() =>
                        deletePresentation(lesson.presentationId)
                     }
                     onDeleteTask={() => deleteTask(lesson.taskId)}
                     onDeleteTest={() => deleteTest(lesson.testId)}
                     lessonName={lesson.name}
                     lessonId={lesson.id}
                     taskId={lesson.taskId}
                     linkId={lesson.linkId}
                     testId={lesson.testId}
                     videoId={lesson.videoLessonId}
                     presentationId={lesson.presentationId}
                     isVisibleTypeForm
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
