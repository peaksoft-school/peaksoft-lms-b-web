import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { BasicModal } from '../../UI/BasicModal'
import { BasicSelect } from '../../UI/BasicSelect'
import { MODAL_TYPES } from '../../../utils/constants/constants'

export const IndexModal = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const modal = searchParams.get('modal')
   const tabs = searchParams.get('tabs')
   const closeModal = () => {
      setSearchParams({ tabs })
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

   return null
}
