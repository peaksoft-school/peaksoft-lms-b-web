import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
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
      accessKey: 'fullName',
   },
   {
      title: 'Формат обучения',
      accessKey: 'studyFormat',
   },
   {
      title: 'Номер телефона',
      accessKey: 'phoneNumber',
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
      <styledWrapper>
         <BreadCrumb />
         <AppTable columns={DATA_COLLUMN} data={table} />
      </styledWrapper>
   )
}

const styledWrapper = styled.div`
   margin-top: 30px;
`
