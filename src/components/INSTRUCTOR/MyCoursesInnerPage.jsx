import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { getStudentsByGroupId } from '../../store/adminGroupSlice'
import { ReactComponent as TrashBinIcon } from '../../assets/icons/TrashBinForTable.svg'
import { AppTable } from '../UI/Table'
import { Buttons } from '../UI/Buttons'
import { ReactComponent as PersonIcon } from '../../assets/icons/PersonIcon.svg'

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
   {
      title: 'Пароль',
      accessKey: 'password',
   },
   {
      title: 'Удалить',
      accessKey: 'delete',
   },
]

export const MyCoursesInnerPage = () => {
   //    const dispatch = useDispatch()
   const { coursesId } = useParams()
   console.log(coursesId)
   //    useEffect(() => {
   //       dispatch(getStudentsByGroupId(groupId))
   //    }, [])
   //    const { table } = useSelector((state) => state.groupSlice)
   return (
      <div style={{ marginTop: '30px' }}>
         <Flex>
            <Box display="flex" justifyContent="space-between" width="46%">
               <Buttons
                  hoverback="null"
                  fontcolor="#3772ff"
                  background="transparent"
                  border="1px solid #3772ff"
                  width="50%"
               >
                  <PersonIcon fontSize="18px" /> Добавить студента в курс
               </Buttons>
               <Buttons width="50%">
                  <PersonIcon fontSize="18px" /> Добавить группу в курс
               </Buttons>
            </Box>
         </Flex>
         <AppTable columns={DATA_COLLUMN} data={[]} />
      </div>
   )
}

const Flex = styled.div`
   display: flex;
   justify-content: flex-end;
`
