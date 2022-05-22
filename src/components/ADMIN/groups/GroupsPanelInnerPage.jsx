import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getStudentsByGroupId } from '../../../store/adminGroupSlice'
import { AppTable } from '../../UI/Table'
import { BreadCrumb } from '../../UI/BreadCrumb'

const DATA_COLLUMN = [
   {
      title: 'ID',
      accessKey: 'id',
   },
   {
      title: 'Имя Фамилия',
      accessKey: 'name',
   },
   {
      title: 'Формат обучения',
      accessKey: 'format',
   },
   {
      title: 'Номер телефона',
      accessKey: 'mobile_phone',
   },
   {
      title: 'E-Mail',
      accessKey: 'email',
   },
]

export const GroupsPanelInnerPage = () => {
   const dispatch = useDispatch()
   const { groupId } = useParams()
   useEffect(() => {
      dispatch(getStudentsByGroupId(groupId))
   }, [])
   const { table } = useSelector((state) => state.groupSlice)
   return (
      <div style={{ marginTop: '30px' }}>
         <BreadCrumb />
         <AppTable columns={DATA_COLLUMN} data={table} />
      </div>
   )
}
