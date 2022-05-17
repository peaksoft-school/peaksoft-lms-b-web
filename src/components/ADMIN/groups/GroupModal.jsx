import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router'
import { BasicModal } from '../../UI/BasicModal'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import {
   deleteGroup,
   createGroup,
   updateGroup,
   sendPhoto,
} from '../../../store/adminGroupSlice'
import { useInput } from '../../../hooks/useInput'
import { convertDate } from '../../../utils/helpers/helpers'
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
