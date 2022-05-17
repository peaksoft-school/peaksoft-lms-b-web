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
   createGroup,
   editGroup,
   sendPhoto,
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
      groupName: '',
      description: '',
   })
   const [editGroupModalImage, setEditGroupModalImage] = useState({})
   const [editGroupModalDate, setEditGroupModalDate] = useState()
   const [editGroupModalData, onChangeEditGroupModalData] = useInput({
      groupName: '',
      description: '',
   })

   const createPhotoHandler = (photo) => {
      console.log(photo)
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
               dateOfFinish: convertDate(editGroupModalDate),
               image: 'https://images.unsplash.com/photo-1652643375706-3259c3287bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80',
            },
            id,
         })
      )
   }

   const createHandler = async () => {
      const { URL } = await dispatch(
         sendPhoto(createGroupModalImage.backImage)
      ).unwrap()
      dispatch(
         createGroup({
            ...createGroupModalData,
            dateOfFinish: convertDate(createGroupModalDate),
            image: URL,
         })
      )

      onCloseModal()
   }

   if (isActive.action === 'addCourse') {
      return (
         <BasicModal
            isDisabled={
               createGroupModalImage.frontImage &&
               createGroupModalDate &&
               createGroupModalData.description &&
               createGroupModalData.groupName
            }
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
                  value={createGroupModalData.groupName}
                  onChange={(e) => onChangeCreateGroupModalData(e)}
                  name="groupName"
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
      console.log(isActive)
      return (
         <BasicModal
            isDisabled={
               editGroupModalImage.frontImage &&
               editGroupModalData.groupName &&
               editGroupModalData.description &&
               editGroupModalDate
            }
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
                  name="groupName"
                  value={
                     editGroupModalData.groupName ||
                     isActive.groupInformation.groupName
                  }
                  onChange={(e) => onChangeEditGroupModalData(e)}
                  width="327"
                  placeholder="Название курса"
               />
               <CustomDatePicker
                  value={
                     editGroupModalDate || isActive.groupInformation.groupName
                  }
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
