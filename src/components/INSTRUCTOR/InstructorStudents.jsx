import React from 'react'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { ReactComponent as PersonIcon } from '../../assets/icons/PersonIcon.svg'
import { Buttons } from '../UI/Buttons'
import { ReactComponent as TrashBinIcon } from '../../assets/icons/TrashBinForTable.svg'
import { AppTable } from '../UI/Table'
import { IndexModal } from './INSTRUCTOR_MODALS/IndexModal'
import { MODAL_TYPES } from '../../utils/constants/constants'

export const InstructorStudents = () => {
   const [searchParams, setSearchParams] = useSearchParams()
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
         accessKey: '',
         action: (item) => {
            return (
               <WrapperIcons>
                  <Buttons style={{ background: 'none' }}>
                     <TrashBinIcon />
                  </Buttons>
               </WrapperIcons>
            )
         },
      },
   ]

   const addStudentToCourse = () => {
      setSearchParams({
         tabs: 'students',
         modal: MODAL_TYPES.ADDSTUDENTTOCOURSE,
      })
   }

   const addGroupsToCourse = () => {
      setSearchParams({
         tabs: 'students',
         modal: MODAL_TYPES.ADDGROUPSTOCOURSE,
      })
   }
   return (
      <div style={{ marginTop: '30px' }}>
         <IndexModal />
         <Flex>
            <Box display="flex" justifyContent="space-between" width="500px">
               <Buttons
                  onClick={addStudentToCourse}
                  hoverback="null"
                  fontcolor="#3772ff"
                  background="transparent"
                  border="1px solid #3772ff"
                  width="50%"
               >
                  <PersonIcon fontSize="18px" /> Добавить студента в курс
               </Buttons>
               <Buttons onClick={addGroupsToCourse} width="50%">
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
