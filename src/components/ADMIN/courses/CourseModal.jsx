import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { deleteCourse } from '../../../store/courseSlice'
import { CreateCourseModal } from './CreateCourseModal'
import { UpdateCourseModal } from './UpdateCourseModal'
import { AppointTeacherModal } from './AppointTeacherModal'
import { MODAL_TYPES } from '../../../utils/constants/constants'

export const CourseModal = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const { modal, courseId, page } = Object.fromEntries([...searchParams])
   const deleteHandler = async () => {
      await dispatch(deleteCourse(courseId))
      closeModalHandler()
   }

   const closeModalHandler = () => {
      setSearchParams({ page: page || 1 })
   }

   if (modal === MODAL_TYPES.ADDCOURSE) {
      return <CreateCourseModal onCloseModal={closeModalHandler} />
   }
   if (modal === MODAL_TYPES.APPOINT_TEACHER) {
      return (
         <AppointTeacherModal
            onCloseModal={closeModalHandler}
            courseId={courseId}
         />
      )
   }
   if (modal === MODAL_TYPES.UPDATECOURSE) {
      return (
         <UpdateCourseModal
            onCloseModal={closeModalHandler}
            courseId={courseId}
         />
      )
   }
   if (modal === MODAL_TYPES.DELETECOURSE) {
      return (
         <ConfirmModal
            isActive
            deleteHandler={deleteHandler}
            toggleModal={closeModalHandler}
         />
      )
   }
   return null
}
