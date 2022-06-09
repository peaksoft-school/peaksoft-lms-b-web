import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useInput } from '../../../hooks/useInput'
import { createGroup, sendPhoto } from '../../../store/adminGroupSlice'
import { convertDate } from '../../../utils/helpers/helpers'
import { BasicModal } from '../../UI/BasicModal'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'

export const CreateGroupModal = ({ onCloseModal }) => {
   const dispatch = useDispatch()
   const [image, setImage] = useState({
      binaryFormat: '',
      imageLink: null,
   })
   const [date, setDate] = useState()
   const [inputsValue, setInputsValue] = useInput({
      groupName: '',
      description: '',
   })
   const getPhotoHandler = (photo) => {
      setImage({
         binaryFormat: URL.createObjectURL(photo),
         imageLink: photo,
      })
   }
   const createGroupHandler = async () => {
      if (image.imageLink) {
         const { URL } = await dispatch(sendPhoto(image.imageLink)).unwrap()
         dispatch(
            createGroup({
               ...inputsValue,
               dateOfFinish: convertDate(date),
               image: URL,
            })
         )
      } else {
         dispatch(
            createGroup({
               ...inputsValue,
               dateOfFinish: convertDate(date),
               image: '',
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
         title="Создать  группу"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={createGroupHandler}
      >
         <ImagePicker image={image.binaryFormat} getPhoto={getPhotoHandler} />

         <FlexInput>
            <Inputs
               value={inputsValue.groupName}
               onChange={(e) => setInputsValue(e)}
               name="groupName"
               width="65%"
               placeholder="Название группы"
            />
            <CustomDatePicker value={date} setDate={setDate} width="149px" />
         </FlexInput>
         <Textarea
            value={inputsValue.description}
            onChange={(e) => setInputsValue(e)}
            name="description"
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
