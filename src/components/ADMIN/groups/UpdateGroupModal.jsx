import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
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

         setImage({
            binaryImage: null,
            imageLink: image,
         })
         setInputsValue({
            groupName,
            description,
         })

         setDate(new Date(dateOfFinish))
      }

      getInitEditModalData()
   }, [])

   const [image, setImage] = useState({
      imageLink: '',
      binaryImage: null,
   })
   const [date, setDate] = useState()
   const [inputsValue, setInputsValue] = useState({
      groupName: '',
      description: '',
   })

   const changeModalInputs = (e) => {
      const { name, value } = e.target
      setInputsValue((prevState) => {
         return {
            ...prevState,
            [name]: value,
         }
      })
   }
   const updatePhotoHandler = (photo) => {
      setImage({
         binaryImage: photo,
         imageLink: URL.createObjectURL(photo),
      })
   }
   const updateGroupHandler = async () => {
      if (image.binaryImage) {
         const { URL } = await dispatch(sendPhoto(image.binaryImage)).unwrap()

         dispatch(
            updateGroup({
               groupInfo: {
                  ...inputsValue,
                  dateOfFinish: convertDate(date),
                  image: URL,
               },
               groupId,
            })
         )
      } else {
         dispatch(
            updateGroup({
               groupInfo: {
                  ...inputsValue,
                  dateOfFinish: convertDate(date),
                  image: image.imageLink,
               },
               groupId,
            })
         )
      }
      onCloseModal()
   }
   const isDisableModal = useCallback(() => {
      return inputsValue.groupName && inputsValue.description && date
   }, [inputsValue.groupName, inputsValue.description, date])
   return (
      <BasicModal
         isDisabled={isDisableModal()}
         title="Pедактировать"
         isActive
         cancelTitle="Отмена"
         successTitle="Редактировать"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={updateGroupHandler}
      >
         <ImagePicker image={image.imageLink} getPhoto={updatePhotoHandler} />

         <FlexInput>
            <Inputs
               name="groupName"
               value={inputsValue.groupName}
               onChange={changeModalInputs}
               width="65%"
               placeholder="Название группы"
            />
            <CustomDatePicker value={date} setDate={setDate} width="149px" />
         </FlexInput>
         <Textarea
            name="description"
            value={inputsValue.description}
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
