import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Buttons from '@mui/material/IconButton/IconButton'
import { getStudentsByGroupId } from '../../../store/adminGroupSlice'
import { Table } from '../../UI/Table'
import { ReactComponent as EditIcon } from '../../../assets/icons/EditIconForTable.svg'
import { ReactComponent as TrashBinIcon } from '../../../assets/icons/TrashBinForTable.svg'

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

const DATA = [
   {
      id: 1,
      name: 'Anna Karimova ',
      format: 'Онлайн',
      mobile_phone: '0777114676  ',
      email: 'John@gmail.com',
   },
   {
      id: 2,
      name: 'Anna Karimova ',
      format: 'Онлайн',
      mobile_phone: '0777114676  ',
      email: 'John@gmail.com',
   },
   {
      id: 3,
      name: 'Anna Karimova ',
      format: 'Онлайн',
      mobile_phone: '0777114676  ',
      email: 'John@gmail.com',
   },
]

export const GroupsPanelInnerPage = () => {
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
      {
         title: 'Действие',
         accessKey: '',
         action: () => {
            return (
               <WrapperIcons>
                  <Buttons style={{ background: 'none' }}>
                     <EditIcon />
                  </Buttons>
                  <Buttons style={{ background: 'none' }}>
                     <TrashBinIcon />
                  </Buttons>
               </WrapperIcons>
            )
         },
      },
   ]
   const dispatch = useDispatch()
   const { groupId } = useParams()
   useEffect(() => {
      dispatch(getStudentsByGroupId(groupId))
   }, [])
   const { table } = useSelector((state) => state.groupSlice)
   return (
      <div style={{ marginTop: '30px' }}>
         <Table headers={DATA_COLLUMN} data={DATA} />
      </div>
   )
}
