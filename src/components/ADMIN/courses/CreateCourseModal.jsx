import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useInput } from '../../../hooks/useInput'
import { createCourse, sendPhoto } from '../../../store/courseSlice'
import { convertDate } from '../../../utils/helpers/helpers'
import { BasicModal } from '../../UI/BasicModal'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'

export const CreateCourseModal = ({ onCloseModal }) => {
   const dispatch = useDispatch()
   const [image, setImage] = useState({
      imageLink: '',
      binaryFormat: null,
   })
   const [date, setDate] = useState()
   const [inputsValue, setInputsValue] = useInput({
      courseName: '',
      description: '',
   })
   const createPhotoHandler = (photo) => {
      setImage({
         imageLink: URL.createObjectURL(photo),
         binaryFormat: photo,
      })
   }
   const createHandler = async () => {
      let URLCOPY
      if (image.binaryFormat) {
         const { URL } = await dispatch(sendPhoto(image.binaryFormat)).unwrap()
         URLCOPY = URL
      }
      dispatch(
         createCourse({
            ...inputsValue,
            dateOfFinish: convertDate(date),
            image: URLCOPY || '',
         })
      )
      onCloseModal()
   }

   const isDisableModal = useCallback(() => {
      return inputsValue.groupName && inputsValue.description && date
   }, [inputsValue.groupName, inputsValue.description, date])
   return (
      <BasicModal
         title="Создать  курс"
         isActive
         isDisabled
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={createHandler}
      >
         <ImagePicker image={image.imageLink} getPhoto={createPhotoHandler} />
         <FlexInput>
            <Inputs
               value={inputsValue.title}
               onChange={(e) => setInputsValue(e)}
               name="courseName"
               width="65%"
               placeholder="Название курса"
            />
            <CustomDatePicker value={date} setDate={setDate} width="149px" />
         </FlexInput>
         <Textarea
            value={inputsValue.description}
            onChange={(e) => setInputsValue(e)}
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
