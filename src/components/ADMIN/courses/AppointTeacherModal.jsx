import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   getAllTeachers,
   assignTeacherToCourse,
} from '../../../store/courseSlice'
import { BasicModal } from '../../UI/BasicModal'
import { MultiSelect } from '../../UI/MultiSelect'

export const AppointTeacherModal = ({ onCloseModal, courseId }) => {
   const { teachers } = useSelector((store) => store.courseSlice)
   const [teachersId, setTeachersId] = useState([])
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllTeachers())
   }, [])

   const appointTeacherToCourse = () => {
      dispatch(
         assignTeacherToCourse({
            courseId,
            teacherId: teachersId.map((teacher) => teacher.id),
         })
      )
   }
   return (
      <BasicModal
         isDisabled={teachersId.length > 0}
         title="Назначить учителя"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={appointTeacherToCourse}
      >
         <MultiSelect
            listTitle="hello world"
            data={teachers}
            value={teachersId}
            setValue={setTeachersId}
         />
      </BasicModal>
   )
}
