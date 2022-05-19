import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton/IconButton'
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

   useEffect(() => {
      dispatch(getAllTeachers())
   }, [])
   const { teachers } = useSelector((state) => state.teacher)

   const headers = [
      {
         title: 'ID',
         accessKey: 'id',
      },
      {
         title: 'Имя Фамилия',
         accessKey: 'fullName',
      },
      {
         title: 'Специализация',
         accessKey: 'specialization',
      },
      {
         title: 'Номер телефона',
         accessKey: 'phoneNumber',
      },
      {
         title: 'E-mail',
         accessKey: 'email',
      },
      {
         title: 'Действие',
         accessKey: '',
         action: (teacherInformation) => {
            const { id: teacherId } = teacherInformation
            return (
               <WrapperIcons>
                  <IconButton
                     onClick={async () => {
                        await dispatch(getTeacherById(teacherId))
                        await setSearchParams({
                           modal: 'updateTeacher',
                           teacherId,
                        })
                     }}
                     style={{ background: 'none' }}
                  >
                     <EditIcon />
                  </IconButton>
                  <IconButton
                     onClick={() => {
                        setSearchParams({ modal: 'deleteTeacher', teacherId })
                     }}
                     style={{ background: 'none' }}
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
         <TeachersModal />
         <AppTable columns={headers} data={teachers} />
      </>
   )
}
