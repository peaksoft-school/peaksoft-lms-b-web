import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { BasicModal } from '../../UI/BasicModal'
import { BasicSelect } from '../../UI/BasicSelect'
import { MODAL_TYPES } from '../../../utils/constants/constants'
import { Inputs } from '../../UI/Input'

export const IndexModal = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const modal = searchParams.get('modal')
   const tabs = searchParams.get('tabs')
   const closeModal = () => {
      setSearchParams({ tabs })
   }

   const closeTasksModal = () => {
      setSearchParams({})
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
            modalCloseHanlder={closeTasksModal}
         >
            <Inputs />
            <Inputs />
            <Inputs />
         </BasicModal>
      )
   }

   return null
}
