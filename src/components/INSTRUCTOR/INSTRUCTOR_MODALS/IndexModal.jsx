import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { BasicModal } from '../../UI/BasicModal'
import { BasicSelect } from '../../UI/BasicSelect'
import { MODAL_TYPES } from '../../../utils/constants/constants'
import { Inputs } from '../../UI/Input'
import { Buttons } from '../../UI/Buttons'
import { useInput } from '../../../hooks/useInput'

export const IndexModal = ({ onAddLinkHandler, onAddNewLesson }) => {
   const [linkData, setLinkData] = useInput({
      link: '',
      linkName: '',
   })
   const [lessonName, setLessonName] = useState('')
   const [searchParams, setSearchParams] = useSearchParams()
   const modal = searchParams.get('modal')
   const tabs = searchParams.get('tabs')
   const closeModal = () => {
      setSearchParams({ tabs })
   }

   const addLinkHandler = () => {
      closeModal()
      return onAddLinkHandler(linkData)
   }

   const addNewLesson = () => {
      closeModal()
      setLessonName('')
      return onAddNewLesson(lessonName)
   }

   if (modal === MODAL_TYPES.ADDSTUDENTTOCOURSE) {
      return (
         <BasicModal
            title="Создать  группу"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModal}
         >
            <BasicSelect data={[]} />
         </BasicModal>
      )
   }
   if (modal === MODAL_TYPES.ADDGROUPSTOCOURSE) {
      return (
         <BasicModal
            title="Создать  группу"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModal}
         >
            <BasicSelect data={[]} />
         </BasicModal>
      )
   }

   if (modal === MODAL_TYPES.ADDNEWPREZENTATION) {
      return (
         <BasicModal
            title="Создать  группу"
            isActive
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModal}
         >
            <Inputs
               placeholder="Введите название презентации"
               margin="0 0 12px 0"
            />
            <Inputs
               placeholder="Введите описание презентации"
               margin="0 0 12px 0"
            />
            <Box display="flex">
               <Inputs placeholder="Выберите файл в формате ppt" />
               <Buttons
                  border="1px solid #3772FF"
                  background="none"
                  hoverback="none"
                  margin="0 0 0 10px"
                  fontcolor="#3772FF"
               >
                  Обзор..
               </Buttons>
            </Box>
         </BasicModal>
      )
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
   return null
}
