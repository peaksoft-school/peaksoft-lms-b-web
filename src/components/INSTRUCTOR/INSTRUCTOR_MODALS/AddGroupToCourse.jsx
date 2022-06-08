import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import {
   assignGroupToCourse,
   getAllGroups,
} from '../../../store/instructorCoursesSlice'
import { BasicModal } from '../../UI/BasicModal'
import { BasicSelect } from '../../UI/BasicSelect'

export const AddGroupToCourse = ({ closeMyCoursesModal }) => {
   const [groups, setGroups] = useState([])
   const [selectValue, setSelectValue] = useState('')
   const dispatch = useDispatch()
   const { coursesId } = useParams()
   useEffect(() => {
      const fetchGroups = async () => {
         const response = await dispatch(getAllGroups()).unwrap()
         setGroups(response.groups)
      }
      fetchGroups()
   }, [])

   const chooseGroup = (value) => {
      setSelectValue(value)
   }

   const assignGroupStudentsToCourse = () => {
      const { id: groupId } = groups.find(
         (group) => group.groupName === selectValue
      )
      dispatch(
         assignGroupToCourse({
            groupId,
            courseId: Number(coursesId),
         })
      )
      closeMyCoursesModal()
   }
   return (
      <BasicModal
         isDisabled={!!selectValue}
         title="Добавить студентов группы в курс"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={closeMyCoursesModal}
         addHandler={assignGroupStudentsToCourse}
      >
         <BasicSelect
            value={selectValue}
            selectOption={chooseGroup}
            placeholder="Группа"
            data={groups.map((group) => {
               return {
                  ...group,
                  title: group.groupName,
               }
            })}
         />
      </BasicModal>
   )
}
