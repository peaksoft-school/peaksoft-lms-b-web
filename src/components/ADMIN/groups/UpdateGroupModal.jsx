import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useInput } from '../../../hooks/useInput'
import {
   getGroupById,
   sendPhoto,
   updateGroup,
} from '../../../store/adminGroupSlice'
import { convertDate } from '../../../utils/helpers/helpers'
import { BasicModal } from '../../UI/BasicModal'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'

export const UpdateGroupModal = ({ onCloseModal, groupId }) => {
   const dispatch = useDispatch()
   useEffect(() => {
      const getInitEditModalData = async () => {
         const { groupName, description, image, dateOfFinish } = await dispatch(
            getGroupById(groupId)
         ).unwrap()

         setUpdateGroupModalImage({
            frontImage: image,
            backImage: null,
         })
         setUpdateGroupModalData({
            groupName,
            description,
         })

         setUpdateGroupModalDate(new Date(dateOfFinish))
      }

      getInitEditModalData()
   }, [])

   const [updateGroupModalImage, setUpdateGroupModalImage] = useState({
      frontImage: '',
      backImage: null,
   })
   const [updateGroupModalDate, setUpdateGroupModalDate] = useState()
   const [updateGroupModalData, setUpdateGroupModalData] = useState({
      groupName: '',
      description: '',
   })

   const changeModalInputs = (e) => {
      const { name, value } = e.target
      setUpdateGroupModalData((prevState) => {
         return {
            ...prevState,
            [name]: value,
         }
      })
   }
   const updatePhotoHandler = (photo) => {
      setUpdateGroupModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }
   const updateGroupHandler = async () => {
      if (updateGroupModalImage.backImage) {
         const { URL } = await dispatch(
            sendPhoto(updateGroupModalImage.backImage)
         ).unwrap()
         dispatch(
            updateGroup({
               groupInfo: {
                  ...updateGroupModalData,
                  dateOfFinish: convertDate(updateGroupModalDate),
                  image: URL || ' ',
               },
               groupId,
            })
         )
      } else {
         dispatch(
            updateGroup({
               groupInfo: {
                  ...updateGroupModalData,
                  dateOfFinish: convertDate(updateGroupModalDate),
                  image: ' ',
               },
               groupId,
            })
         )
      }
      onCloseModal()
   }
   return (
      <BasicModal
         isDisabled={
            updateGroupModalData.groupName &&
            updateGroupModalData.description &&
            updateGroupModalDate
         }
         title="Pедактировать"
         isActive
         cancelTitle="Отмена"
         successTitle="Редактировать"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={updateGroupHandler}
      >
         <ImagePicker
            image={updateGroupModalImage.frontImage}
            getPhoto={updatePhotoHandler}
         />

         <FlexInput>
            <Inputs
               name="groupName"
               value={updateGroupModalData.groupName}
               onChange={changeModalInputs}
               width="327"
               placeholder="Название группы"
            />
            <CustomDatePicker
               value={updateGroupModalDate}
               setDate={setUpdateGroupModalDate}
               width="149px"
            />
         </FlexInput>
         <Textarea
            name="description"
            value={updateGroupModalData.description}
            onChange={changeModalInputs}
            placeholder="Описание группы"
         />
      </BasicModal>
   )
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
