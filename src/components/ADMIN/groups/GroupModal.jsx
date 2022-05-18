import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { deleteGroup } from '../../../store/adminGroupSlice'
import { UpdateGroupModal } from './UpdateGroupModal'
import { CreateGroupModal } from './CreateGroupModal'

export const GroupModal = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const { modal, groupId } = Object.fromEntries([...searchParams])

   const closeModal = () => {
      setSearchParams({})
   }

   const deleteGroupHandler = () => {
      dispatch(deleteGroup(groupId))
      closeModal()
   }

   if (modal === 'addGroup') {
      return <CreateGroupModal onCloseModal={closeModal} />
   }
   if (modal === 'updateGroup') {
      return <UpdateGroupModal onCloseModal={closeModal} groupId={groupId} />
   }
   if (modal === 'deleteGroup') {
      return (
         <ConfirmModal
            isActive
            deleteHandler={deleteGroupHandler}
            toggleModal={closeModal}
         />
      )
   }
   return null
}
