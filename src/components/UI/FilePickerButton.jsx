import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Buttons } from './Buttons'

export const FilePickerButton = ({ getFile, children }) => {
   const [errors, setErrors] = useState('')

   const onDrop = useCallback((acceptedFiles, fileRejections) => {
      if (acceptedFiles[0]) {
         getFile(acceptedFiles[0])
         setErrors('')
      }
      fileRejections.forEach((file) => {
         file.errors.forEach((err) => {
            if (err.code === 'file-too-large') {
               toast.error('Недопустимый размер фото ')
            }

            if (err.code === 'file-invalid-type') {
               toast.error(`недопустимый формат фото`)
            }
         })
      })
   }, [])
   const { getRootProps, getInputProps } = useDropzone({
      multiple: false,
      maxSize: 100000,
      onDrop,
   })
   return (
      <DropZoneWrapper {...getRootProps()}>
         <input type="text" {...getInputProps()} />
         {children}
      </DropZoneWrapper>
   )
}

const DropZoneWrapper = styled.div`
   display: flex;
`
