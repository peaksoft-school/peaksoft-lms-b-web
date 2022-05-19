import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UpdateTeacherModal } from './UpdateTeacherModal'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { AddTeacherModal } from './AddTeacherModal'
import { deleteTeachers } from '../../../store/adminTeachersSlice'

export const TeachersModal = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const { modal, teacherId } = Object.fromEntries([...searchParams])

   const closeModalHandler = () => {
      setSearchParams({})
   }

   const deleteHandler = () => {
      dispatch(deleteTeachers(teacherId))
      setSearchParams({})
   }

   if (modal === 'addTeacher') {
      return (
         <AddTeacherModal
            teacherId={teacherId}
            onClose={closeModalHandler}
            setSearchParams={setSearchParams}
         />
      )
   }

   if (modal === 'updateTeacher') {
      return (
         <UpdateTeacherModal
            teacherId={teacherId}
            onClose={closeModalHandler}
         />
      )
   }
   if (modal === 'deleteTeacher') {
      return (
         <ConfirmModal
            // isActive={isShowConfirmModal}
            isActive
            title="Вы уверены, что хотите удалить группу...?"
            toggleModal={closeModalHandler}
            deleteHandler={deleteHandler}
         />
      )
   }

   return null
}
