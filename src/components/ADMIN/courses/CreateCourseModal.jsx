import React, { useState } from 'react'
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
   const [createCourseModalImage, setCreateCourseModalImage] = useState({
      frontImage: '',
      backImage: null,
   })
   const [createCourseModalDate, setCreateCourseModalDate] = useState()
   const [createCourseModalData, onChangeCreateCourseModalData] = useInput({
      courseName: '',
      description: '',
   })
   const createPhotoHandler = (photo) => {
      setCreateCourseModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }
   const createHandler = async () => {
      const { URL } = await dispatch(
         sendPhoto(createCourseModalImage.backImage)
      ).unwrap()
      dispatch(
         createCourse({
            ...createCourseModalData,
            dateOfFinish: convertDate(createCourseModalDate),
            image: URL,
         })
      )
      onCloseModal()
   }
   return (
      <BasicModal
         title="Создать  курс"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={createHandler}
      >
         <ImagePicker
            image={createCourseModalImage.frontImage}
            getPhoto={createPhotoHandler}
         />
         <FlexInput>
            <Inputs
               value={createCourseModalData.title}
               onChange={(e) => onChangeCreateCourseModalData(e)}
               name="courseName"
               width="327"
               placeholder="Название курса"
            />
            <CustomDatePicker
               value={createCourseModalDate}
               setDate={setCreateCourseModalDate}
               width="149px"
            />
         </FlexInput>
         <Textarea
            value={createCourseModalData.description}
            onChange={(e) => onChangeCreateCourseModalData(e)}
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
