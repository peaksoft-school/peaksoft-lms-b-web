import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { BasicModal } from '../../UI/BasicModal'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import {
   deleteGroup,
   getGroupsList,
   createGroup,
   editGroup,
} from '../../../store/adminGroupSlice'
import { useInput } from '../../../hooks/useInput'
import { convertDate } from '../../../utils/helpers/helpers'

export const GroupModal = ({ isActive, onCloseModal }) => {
   const dispatch = useDispatch()

   const [createGroupModalImage, setCreateGroupModalImage] = useState({
      frontImage: '',
      backImage: null,
   })
   const [createGroupModalDate, setCreateGroupModalDate] = useState()
   const [createGroupModalData, onChangeCreateGroupModalData] = useInput({
      group_name: '',
      description: '',
   })
   const [editGroupModalImage, setEditGroupModalImage] = useState({})
   const [editGroupModalDate, setEditGroupModalDate] = useState()
   const [editGroupModalData, onChangeEditGroupModalData] = useInput({
      group_name: '',
      description: '',
   })

   const createPhotoHandler = (photo) => {
      setCreateGroupModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }

   const deleteHandler = (id) => {
      dispatch(deleteGroup(id))
      onCloseModal()
   }

   const editPhotoHandler = (photo) => {
      setEditGroupModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }
   const editHandler = (id) => {
      dispatch(
         editGroup({
            groupInfo: {
               ...editGroupModalData,
               date_of_finish: convertDate(editGroupModalDate),
               image: 'https://images.unsplash.com/photo-1652643375706-3259c3287bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80',
            },
            id,
         })
      )
   }

   const createHandler = () => {
      dispatch(
         createGroup({
            ...createGroupModalData,
            date_of_finish: convertDate(createGroupModalDate),
            image: 'https://images.unsplash.com/photo-1652636373308-31e97c10f6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
         })
      )
      onCloseModal()
   }

   if (isActive.action === 'addCourse') {
      return (
         <BasicModal
            title="Создать  курс"
            isActive={!!isActive}
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={onCloseModal}
            addHandler={createHandler}
         >
            <ImagePicker
               image={createGroupModalImage.frontImage}
               getPhoto={createPhotoHandler}
            />

            <FlexInput>
               <Inputs
                  value={createGroupModalData.title}
                  onChange={(e) => onChangeCreateGroupModalData(e)}
                  name="group_name"
                  width="327"
                  placeholder="Название курса"
               />
               <CustomDatePicker
                  value={createGroupModalDate}
                  setDate={setCreateGroupModalDate}
                  width="149px"
               />
            </FlexInput>
            <Textarea
               value={createGroupModalData.description}
               onChange={(e) => onChangeCreateGroupModalData(e)}
               name="description"
               placeholder="Описание курса"
            />
         </BasicModal>
      )
   }
   if (isActive.action === 'edit') {
      return (
         <BasicModal
            title="Pедактировать"
            isActive={!!isActive}
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={onCloseModal}
            addHandler={() => editHandler(isActive.groupInformation.id)}
         >
            <ImagePicker
               image={editGroupModalImage.frontImage}
               getPhoto={editPhotoHandler}
            />

            <FlexInput>
               <Inputs
                  name="group_name"
                  value={editGroupModalData.title}
                  onChange={(e) => onChangeEditGroupModalData(e)}
                  width="327"
                  placeholder="Название курса"
               />
               <CustomDatePicker
                  value={editGroupModalDate}
                  setDate={setEditGroupModalDate}
                  width="149px"
               />
            </FlexInput>
            <Textarea
               name="description"
               value={editGroupModalData.description}
               onChange={(e) => onChangeEditGroupModalData(e)}
               placeholder="Описание курса"
            />
         </BasicModal>
      )
   }
   if (isActive.action === 'delete') {
      return (
         <ConfirmModal
            isActive={!!isActive}
            deleteHandler={() => deleteHandler(isActive.id)}
            toggleModal={onCloseModal}
         />
      )
   }
   return null
}

const FlexInput = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 25px;
`
const Textarea = styled.textarea`
   width: 491px;
   height: 123px;
   resize: none;
   margin-top: 12px;
   border-radius: 10px;
   outline: none;
   padding: 10px 18px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: var(--base-font);
   border: 1px solid #d4d4d4;
   ::placeholder {
      color: #8d949e;
   }
   :focus {
      border: 1px solid #3772ff;
   }
`
