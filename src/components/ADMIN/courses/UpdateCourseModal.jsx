import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useInput } from '../../../hooks/useInput'
import { getCourseById } from '../../../store/courseSlice'
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

         setUpdateCourseModalImage({
            frontImage: image,
            backImage: null,
         })
         setUpdateCourseModalData({
            courseName,
            description,
         })
         setUpdateCourseModalDate(new Date(dateOfFinish))
      }

      fetch()
   }, [])

   const [updateCourseModalImage, setUpdateCourseModalImage] = useState({
      frontImage: '',
      backImage: null,
   })
   const [updateCourseModalDate, setUpdateCourseModalDate] = useState()
   const [updateCourseModalData, setUpdateCourseModalData] = useState({
      description: '',
      courseName: '',
   })

   const InputsChangeHandler = (event) => {
      const { name, value } = event.target
      setUpdateCourseModalData((prevState) => {
         return {
            ...prevState,
            [name]: value,
         }
      })
   }

   const editPhotoHandler = (photo) => {
      setUpdateCourseModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }
   const editHandler = () => {}
   return (
      <BasicModal
         title="Pедактировать"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={onCloseModal}
         addHandler={editHandler}
      >
         <ImagePicker
            image={updateCourseModalImage.frontImage}
            getPhoto={editPhotoHandler}
         />
         <FlexInput>
            <Inputs
               name="courseName"
               value={updateCourseModalData.courseName}
               onChange={InputsChangeHandler}
               width="327"
               placeholder="Название курса"
            />
            <CustomDatePicker
               value={updateCourseModalDate}
               setDate={setUpdateCourseModalDate}
               width="149px"
            />
         </FlexInput>
         <Textarea
            name="description"
            value={updateCourseModalData.description}
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
