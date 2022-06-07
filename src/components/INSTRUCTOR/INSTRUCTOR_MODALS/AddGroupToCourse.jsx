import React, { useEffect } from 'react'
import { BasicModal } from '../../UI/BasicModal'
import { BasicSelect } from '../../UI/BasicSelect'

export const AddGroupToCourse = ({ closeMyCoursesModal }) => {
   return (
      <BasicModal
         title="Создать  группу"
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         isActiveFooter="true"
         modalCloseHanlder={closeMyCoursesModal}
      >
         <BasicSelect placeholder="" data={[]} />
      </BasicModal>
   )
}
