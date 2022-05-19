import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Buttons from '@mui/material/IconButton/IconButton'
import { getStudentsByGroupId } from '../../../store/adminGroupSlice'
import { AppTable } from '../../UI/Table'
import { BreadCrumb } from '../../UI/BreadCrumb'

const WrapperIcons = styled.div`
   width: 20vh;
   display: flex;
   justify-content: center;
   align-items: center;
   & > * {
      &:hover {
         cursor: pointer;
         color: blue;
      }
   }
`

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
