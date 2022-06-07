import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { BasicModal } from '../../UI/BasicModal'
import { MODAL_TYPES } from '../../../utils/constants/constants'
import { Inputs } from '../../UI/Input'
import { Buttons } from '../../UI/Buttons'
import { useInput } from '../../../hooks/useInput'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { FilePickerButton } from '../../UI/FilePickerButton'
import { AddStudentToCourse } from './AddStudentToCourse'
import { AddGroupToCourse } from './AddGroupToCourse'

export const IndexModal = ({
   onAddLinkHandler,
   onAddNewLesson,
   deleteLesson,
   onAddVideoLesson,
   onAddPresentation,
}) => {
   const [linkData, setLinkData] = useInput({
      link: '',
      linkName: '',
   })
   const [videoLesson, onChangeVideoLesson] = useInput({
      name: '',
      description: '',
      link: '',
   })
   const [presentation, onChangePresentation] = useInput({
      name: '',
      description: '',
   })
   const [presentationFile, setPresentationFile] = useState(null)
   const [lessonName, setLessonName] = useState('')
   const [searchParams, setSearchParams] = useSearchParams()
   const modal = searchParams.get('modal')
   const tabs = searchParams.get('tabs')
   const lessonId = searchParams.get('lessonId')
   const closeModal = () => {
      setSearchParams({ tabs })
   }

   const addLinkHandler = () => {
      closeModal()
      return onAddLinkHandler({
         text: linkData.linkName,
         link: linkData.link,
         lessonId,
      })
   }

   const addNewLesson = () => {
      closeModal()
      setLessonName('')
      return onAddNewLesson(lessonName)
   }

   const deleteLessonHandler = () => {
      closeModal()
      return deleteLesson(lessonId)
   }

   const addVideoLesson = () => {
      closeModal()
      return onAddVideoLesson({
         ...videoLesson,
         lessonId,
      })
   }

   const addPresentation = () => {
      onAddPresentation({
         ...presentation,
         file: presentationFile,
         lessonId,
      })
      closeModal()
   }

   const closeMyCoursesModal = () => {
      setSearchParams({})
   }

   if (modal === MODAL_TYPES.ADDSTUDENTTOCOURSE) {
      return <AddStudentToCourse closeMyCoursesModal={closeModal} />
   }
   if (modal === MODAL_TYPES.ADDGROUPSTOCOURSE) {
      return <AddGroupToCourse closeMyCoursesModal={closeModal} />
   }

   if (modal === MODAL_TYPES.ADDNEWLINK) {
      return (
         <BasicModal
            title="Добавить ссылку"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModal}
            addHandler={addLinkHandler}
            isDisabled={linkData.link && linkData.linkName}
         >
            <Inputs
               value={linkData.linkName}
               onChange={(e) => setLinkData(e)}
               name="linkName"
               margin="0 0 12px 0"
               placeholder="Отоброжаемый текст"
            />
            <Inputs
               value={linkData.link}
               onChange={(e) => setLinkData(e)}
               name="link"
               placeholder="Вставьте ссылку"
            />
         </BasicModal>
      )
   }
   if (modal === MODAL_TYPES.ADDNEWLESSON) {
      return (
         <BasicModal
            title="Добавить урок"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModal}
            addHandler={addNewLesson}
            isDisabled={lessonName}
         >
            <Inputs
               value={lessonName}
               onChange={(e) => setLessonName(e.target.value)}
               name="link"
               placeholder="Название урока"
            />
         </BasicModal>
      )
   }
   if (modal === MODAL_TYPES.DELETELESSON) {
      return (
         <ConfirmModal
            isActive
            deleteHandler={deleteLessonHandler}
            toggleModal={closeModal}
         />
      )
   }
   if (modal === MODAL_TYPES.ADDLINKFORLESSON) {
      return (
         <BasicModal
            title="Добавить ссылку"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModal}
            addHandler={addLinkHandler}
            isDisabled={linkData.link && linkData.linkName}
         >
            <Inputs
               value={linkData.linkName}
               onChange={(e) => setLinkData(e)}
               name="linkName"
               margin="0 0 12px 0"
               placeholder="Отоброжаемый текст"
            />
            <Inputs
               value={linkData.link}
               onChange={(e) => setLinkData(e)}
               name="link"
               placeholder="Вставьте ссылку"
            />
         </BasicModal>
      )
   }
   if (modal === MODAL_TYPES.ADDVIDEOFORLESSON) {
      return (
         <BasicModal
            title="Добавить ссылку"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModal}
            addHandler={addVideoLesson}
            isDisabled={
               videoLesson.name && videoLesson.description && videoLesson.link
            }
         >
            <Inputs
               value={videoLesson.name}
               onChange={(e) => onChangeVideoLesson(e)}
               name="name"
               margin="0 0 12px 0"
               placeholder="Введите название видеоурока"
            />
            <Inputs
               value={videoLesson.description}
               onChange={(e) => onChangeVideoLesson(e)}
               name="description"
               margin="0 0 12px 0"
               placeholder="Введите описание видеоурока"
            />
            <Inputs
               value={videoLesson.link}
               onChange={(e) => onChangeVideoLesson(e)}
               name="link"
               placeholder="Введите ссылку на видеоурок"
            />
         </BasicModal>
      )
   }
   if (modal === MODAL_TYPES.ADDPREZENTATIONFORLESSON) {
      return (
         <BasicModal
            title="Создать  группу"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            addHandler={addPresentation}
            modalCloseHanlder={closeModal}
            isDisabled={
               presentation.name && presentation.description && presentationFile
            }
         >
            <Inputs
               name="name"
               value={presentation.name}
               onChange={(e) => onChangePresentation(e)}
               placeholder="Введите название презентации"
               margin="0 0 12px 0"
            />
            <Inputs
               name="description"
               value={presentation.description}
               onChange={(e) => onChangePresentation(e)}
               placeholder="Введите описание презентации"
               margin="0 0 12px 0"
            />
            <Box display="flex">
               <Inputs
                  value={presentationFile ? presentationFile.path : ''}
                  placeholder="Выберите файл в формате ppt"
               />
               <FilePickerButton getFile={setPresentationFile}>
                  <Buttons
                     border="1px solid #3772FF"
                     background="none"
                     hoverback="none"
                     margin="0 0 0 10px"
                     fontcolor="#3772FF"
                  >
                     Обзор..
                  </Buttons>
               </FilePickerButton>
            </Box>
         </BasicModal>
      )
   }
   return null
}
