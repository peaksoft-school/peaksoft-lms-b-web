import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import DropZone from '../../assets/icons/DropZone.svg'
import { Title } from './Title'
import { Notification } from './Notification'

const StyledImagePicker = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
`

const DropZoneWrapper = styled.div`
   margin-bottom: 20px;
`

const Image = styled.img`
   width: 173px;
   height: 145px;
`

export const ImagePicker = ({ getPhoto, image }) => {
   const [errors, setErrors] = useState('')

   const onDrop = useCallback((acceptedFiles, fileRejections) => {
      if (acceptedFiles[0]) {
         getPhoto(acceptedFiles[0])
         setErrors('')
      }
      fileRejections.forEach((file) => {
         file.errors.forEach((err) => {
            if (err.code === 'file-too-large') {
               setErrors(`недопустимый размер фото`)
            }

            if (err.code === 'file-invalid-type') {
               setErrors(`недопустимый формат фото`)
            }
         })
      })
   }, [])
   const { getRootProps, getInputProps, isDragAccept, isDragReject } =
      useDropzone({
         multiple: false,
         accept: 'image/jpeg,image/png',
         maxSize: 100000,
         onDrop,
      })
   return (
      <StyledImagePicker>
         <DropZoneWrapper {...getRootProps()}>
            <input type="text" {...getInputProps()} />
            <Image src={image || DropZone} alt="" />
         </DropZoneWrapper>
         <Title fontSize="14" fontcolor="#8d949e">
            {errors || (
               <p>
                  Нажмите на иконку чтобы <br /> загрузить или перетащите фото
               </p>
            )}
         </Title>
      </StyledImagePicker>
   )
}
