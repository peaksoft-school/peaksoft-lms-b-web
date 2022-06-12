import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as PersonIcon } from '../../assets/icons/PersonIcon.svg'
import { Buttons } from '../UI/Buttons'
import { ReactComponent as TrashBinIcon } from '../../assets/icons/TrashBinForTable.svg'
import { AppTable } from '../UI/Table'
import { IndexModal } from './INSTRUCTOR_MODALS/IndexModal'
import { MODAL_TYPES } from '../../utils/constants/constants'
import { getAllTeacherStudents } from '../../store/instructorCoursesSlice'

export const InstructorStudents = ({ coursesId }) => {
   const [searchParams, setSearchParams] = useSearchParams()
   const { students } = useSelector((store) => store.instructorSlice)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllTeacherStudents(coursesId))
   }, [])
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

      {
         title: 'Удалить',
         accessKey: '',
         action: (item) => {
            return (
               <WrapperIcons>
                  <Buttons
                     background="transparent"
                     hoverback="none"
                     style={{ background: 'none' }}
                  >
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
         courseId: coursesId,
      })
   }

   const addGroupsToCourse = () => {
      setSearchParams({
         tabs: 'students',
         modal: MODAL_TYPES.ADDGROUPSTOCOURSE,
         courseId: coursesId,
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
         <AppTable columns={DATA_COLLUMN} data={students} />
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
