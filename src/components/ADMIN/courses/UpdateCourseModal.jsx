import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
   getCourseById,
   sendPhoto,
   updateCourse,
} from '../../../store/courseSlice'
import { convertDate } from '../../../utils/helpers/helpers'
import { BasicModal } from '../../UI/BasicModal'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'

export const UpdateCourseModal = ({ onCloseModal, courseId }) => {
   const dispatch = useDispatch()
   useEffect(() => {
      const fetch = async () => {
         const { courseName, description, image, dateOfFinish } =
            await dispatch(getCourseById(courseId)).unwrap()

         setImage({
            imageLink: image,
            binaryFormat: null,
         })
         setInputsValue({
            courseName,
            description,
         })
         setDate(new Date(dateOfFinish))
      }

      fetch()
   }, [])

   const [image, setImage] = useState({
      imageLink: '',
      binaryFormat: null,
   })
   const [date, setDate] = useState()
   const [inputsValue, setInputsValue] = useState({
      description: '',
      courseName: '',
   })

   const InputsChangeHandler = (event) => {
      const { name, value } = event.target
      setInputsValue((prevState) => {
         return {
            ...prevState,
            [name]: value,
         }
      })
   }

   const editPhotoHandler = (photo) => {
      setImage({
         imageLink: URL.createObjectURL(photo),
         binaryFormat: photo,
      })
   }
   const editHandler = async () => {
      let URLCOPY
      if (image.binaryFormat) {
         const { URL } = await dispatch(sendPhoto(image.binaryFormat)).unwrap()
         URLCOPY = URL
      }
      dispatch(
         updateCourse({
            courseId,
            courseInformation: {
               ...inputsValue,
               dateOfFinish: convertDate(date),
               image: URLCOPY || image.imageLink || '',
            },
         })
      )
      onCloseModal()
   }
   const isDisableModal = useCallback(() => {
      return inputsValue.groupName && inputsValue.description && date
   }, [inputsValue.groupName, inputsValue.description, date])
   return (
      <BasicModal
         title="Pедактировать"
         isActive
         cancelTitle="Отмена"
         successTitle="Редактировать"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={editHandler}
         isDisabled={isDisableModal}
      >
         <ImagePicker image={image.imageLink} getPhoto={editPhotoHandler} />
         <FlexInput>
            <Inputs
               name="courseName"
               value={inputsValue.courseName}
               onChange={InputsChangeHandler}
               width="65%"
               placeholder="Название курса"
            />
            <CustomDatePicker value={date} setDate={setDate} width="149px" />
         </FlexInput>
         <Textarea
            name="description"
            value={inputsValue.description}
            onChange={InputsChangeHandler}
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
