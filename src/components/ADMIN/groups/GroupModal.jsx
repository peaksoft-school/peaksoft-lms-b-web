import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { deleteGroup } from '../../../store/adminGroupSlice'
import { UpdateGroupModal } from './UpdateGroupModal'
import { CreateGroupModal } from './CreateGroupModal'
import { MODAL_TYPES } from '../../../utils/constants/constants'

export const GroupModal = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const { modal, groupId, page } = Object.fromEntries([...searchParams])

   const closeModal = () => {
      setSearchParams({ page })
   }

   const deleteGroupHandler = () => {
      dispatch(deleteGroup(groupId))
      closeModal()
   }

   if (modal === MODAL_TYPES.ADDGROUP) {
      return <CreateGroupModal onCloseModal={closeModal} />
   }
   if (modal === MODAL_TYPES.UPDATEGROUP) {
      return <UpdateGroupModal onCloseModal={closeModal} groupId={groupId} />
   }
   if (modal === MODAL_TYPES.DELETEGROUP) {
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
