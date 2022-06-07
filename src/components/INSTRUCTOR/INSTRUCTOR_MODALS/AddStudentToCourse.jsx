import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllStudents } from '../../../store/instructorCoursesSlice'
import { BasicModal } from '../../UI/BasicModal'
import { StudentItem } from './StudentItem'
import { SearchInput } from '../../UI/SearchInput'
import { useDebounce } from '../../../hooks/useDebounce'

export const AddStudentToCourse = ({ closeMyCoursesModal }) => {
   const [students, setStudents] = useState([])
   const [searchValue, setSearchValue] = useState(' ')
   const [value, setValue] = useState('')
   const dispatch = useDispatch()
   const debauncedValue = useDebounce(searchValue, 1500)
   useEffect(() => {
      const fetchStudents = async () => {
         const response = await dispatch(getAllStudents()).unwrap()
         setStudents(response.students)
      }

      fetchStudents()
   }, [])
   const onChangeInput = (event) => {
      setValue(event.target.value)
      setSearchValue(event.target.value)
   }

   const filteredArray = useMemo(
      () =>
         students.filter((student) => {
            return student.studentName
               .toLowerCase()
               .match(debauncedValue.toLowerCase())
         }),
      [debauncedValue]
   )

   const AddStudentToCourse = (studentId) => {
      console.log(studentId)
   }

   return (
      <BasicModal
         title="Создать  группу"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={closeMyCoursesModal}
      >
         <SearchInput value={value} onChange={onChangeInput} />
         {filteredArray.map((student) => {
            return (
               <StudentItem
                  key={student.id}
                  onChooseHandler={() => AddStudentToCourse(student.id)}
                  fullName={student.fullName}
               />
            )
         })}
      </BasicModal>
   )
}
