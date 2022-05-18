import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { deleteCourse } from '../../../store/courseSlice'
import { CreateCourseModal } from './CreateCourseModal'
import { UpdateCourseModal } from './UpdateCourseModal'
import { AppointTeacherModal } from './AppointTeacherModal'

export const GroupModal = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const { modal, courseId } = Object.fromEntries([...searchParams])
   const deleteHandler = async () => {
      await dispatch(deleteCourse(courseId))
      closeModalHandler()
   }

   const closeModalHandler = () => {
      setSearchParams({})
   }

   if (modal === 'addCourse') {
      return <CreateCourseModal onCloseModal={closeModalHandler} />
   }
   if (modal === 'appointTeacherCourse') {
      return (
         <AppointTeacherModal
            onCloseModal={closeModalHandler}
            courseId={courseId}
         />
      )
   }
   if (modal === 'updateCourse') {
      return (
         <UpdateCourseModal
            onCloseModal={closeModalHandler}
            courseId={courseId}
         />
      )
   }
   if (modal === 'deleteCourse') {
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
