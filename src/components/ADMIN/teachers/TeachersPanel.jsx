import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton/IconButton'
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { Buttons } from '../../UI/Buttons'
import { AppTable } from '../../UI/Table'
import { ReactComponent as EditIcon } from '../../../assets/icons/EditIconForTable.svg'
import { ReactComponent as TrashBinIcon } from '../../../assets/icons/TrashBinForTable.svg'
import {
   getAllTeachers,
   getTeacherById,
} from '../../../store/adminTeachersSlice'
import { TeachersModal } from './TeachersModal'

const Btn = styled.div`
   display: flex;
   justify-content: end;
   margin-top: 24px;
   margin-bottom: 24px;
`

const WrapperIcons = styled.div`
   width: 20vh;
   display: flex;
   justify-content: space-around;
   align-self: center;
   & > * {
      &:hover {
         cursor: pointer;
         color: blue;
      }
   }
`
export const TeachersPanel = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const { pathname } = useLocation()
   const pages = searchParams.get('page')

   useEffect(() => {
      dispatch(getAllTeachers(pages || 1))
   }, [pages])
   const { teachers, page } = useSelector((store) => store.teacher)

   const getTeacherInformation = async (teacherId) => {
      await dispatch(getTeacherById(teacherId))
      await setSearchParams({
         modal: 'updateTeacher',
         teacherId,
         page: pages,
      })
   }

   const headers = [
      {
         id: 1,
         title: 'ID',
         accessKey: 'id',
      },
      {
         id: 2,
         title: 'Имя Фамилия',
         accessKey: 'fullName',
      },
      {
         id: 3,
         title: 'Специализация',
         accessKey: 'specialization',
      },
      {
         id: 4,
         title: 'Номер телефона',
         accessKey: 'phoneNumber',
      },
      {
         id: 5,
         title: 'E-mail',
         accessKey: 'email',
      },
      {
         id: 6,
         title: 'Действие',
         accessKey: '',
         action: (teacherInformation) => {
            const { id: teacherId } = teacherInformation
            return (
               <WrapperIcons>
                  <IconButton onClick={() => getTeacherInformation(teacherId)}>
                     <EditIcon />
                  </IconButton>
                  <IconButton
                     onClick={() => {
                        setSearchParams({
                           modal: 'deleteTeacher',
                           teacherId,
                           page: pages,
                        })
                     }}
                  >
                     <TrashBinIcon />
                  </IconButton>
               </WrapperIcons>
            )
         },
      },
   ]

   return (
      <>
         <Btn>
            <Buttons
               width="199px"
               height="40px"
               onClick={() => {
                  setSearchParams({ modal: 'addTeacher' })
               }}
            >
               <AiOutlinePlus fontSize="25px" /> Добавить учителя
            </Buttons>
         </Btn>
         <TeachersModal page={pages} />
         <AppTable
            isActivePagination={page > 1}
            columns={headers}
            data={teachers}
            page={page}
            pathName={pathname}
         />
      </>
   )
}
