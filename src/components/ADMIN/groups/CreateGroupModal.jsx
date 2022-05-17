import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useInput } from '../../../hooks/useInput'
import { createGroup, sendPhoto } from '../../../store/adminGroupSlice'
import { convertDate } from '../../../utils/helpers/helpers'
import { BasicModal } from '../../UI/BasicModal'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'

export const CreateGroupModal = ({ onCloseModal, groupId }) => {
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
   const getPhotoHandler = (photo) => {
      setCreateGroupModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }
   const createGroupHandler = async () => {
      const { URL } = await dispatch(
         sendPhoto(createGroupModalImage.backImage)
      ).unwrap()
      dispatch(
         createGroup({
            ...createGroupModalData,
            dateOfFinish: convertDate(createGroupModalDate),
            image: URL || '',
         })
      )
      onCloseModal()
   }

   return (
      <BasicModal
         isDisabled={
            createGroupModalDate &&
            createGroupModalData.description &&
            createGroupModalData.groupName
         }
         title="Создать  курс"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={createGroupHandler}
      >
         <ImagePicker
            image={createGroupModalImage.frontImage}
            getPhoto={getPhotoHandler}
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
