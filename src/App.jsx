import React from 'react'
import styled from 'styled-components'
import Buttons from '@mui/material/IconButton/IconButton'
import { Table } from './components/UI/Table'
import { ReactComponent as EyeIcon } from './assets/icons/EyesForTable.svg'
import { ReactComponent as EditIcon } from './assets/icons/EditIconForTable.svg'
import { ReactComponent as TrashBinIcon } from './assets/icons/TrashBinForTable.svg'

const WrapperIcons = styled.div`
   width: 20vh;
   display: flex;
   justify-content: space-between;
   align-items: center;
   & > * {
      &:hover {
         cursor: pointer;
         color: blue;
      }
   }
`
function App() {
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
         action: (item) => {
            return (
               <WrapperIcons key={item.id}>
                  <Buttons
                     onClick={() => {
                        console.log(item.id)
                     }}
                     style={{ background: 'none' }}
                  >
                     <EyeIcon />
                  </Buttons>
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
   const DATA = [
      {
         id: 1,
         name: 'Anna Karimova ',
         format: 'Онлайн',
         mobile_phone: '0777114676	',
         email: 'John@gmail.com',
      },
      {
         id: 2,
         name: 'Anna Karimova ',
         format: 'Онлайн',
         mobile_phone: '0777114676	',
         email: 'John@gmail.com',
      },
      {
         id: 3,
         name: 'Anna Karimova ',
         format: 'Онлайн',
         mobile_phone: '0777114676	',
         email: 'John@gmail.com',
      },
   ]
   const COLUMN_GROUP_INNER_PAGE_STUDENTS = [
      {
         title: 'ID',
         accessKey: 'id',
      },
      {
         title: 'Имя Фамилия',
         accessKey: 'name',
      },
      {
         title: 'Группа',
         accessKey: 'group',
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
   const GROUP_INNER_PAGE_STUDENTS = [
      {
         id: 1,
         name: 'Anna Karimova ',
         group: 'JS-15-22',
         format: 'Онлайн',
         mobile_phone: '0777114676  ',
         email: 'John@gmail.com',
      },
      {
         id: 1,
         name: 'Anna Karimova ',
         group: 'JS-15-22',
         format: 'Онлайн',
         mobile_phone: '0777114676  ',
         email: 'John@gmail.com',
      },
      {
         id: 1,
         name: 'Anna Karimova ',
         group: 'JS-15-22',
         format: 'Онлайн',
         mobile_phone: '0777114676  ',
         email: 'John@gmail.com',
      },
   ]
   const COLUMN_COURSE_INNER_PAGE_TEACHER = [
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
   const COURES_INNER_PAGE_TEACHER = [
      {
         ID: 1,
         name: 'Anna Karimova',
         format: 'Онлайн',
         mobile_phone: '0777114676',
         email: 'John@gmail.com',
      },
      {
         ID: 1,
         name: 'Anna Karimova',
         format: 'Онлайн',
         mobile_phone: '0777114676',
         email: 'John@gmail.com',
      },
      {
         ID: 1,
         name: 'Anna Karimova',
         format: 'Онлайн',
         mobile_phone: '0777114676',
         email: 'John@gmail.com',
      },
   ]
   const COLUMN_INSTUCTOR_COURS = [
      {
         title: 'ID',
         accessKey: 'id',
      },
      {
         title: 'Имя Фамилия',
         accessKey: 'name',
      },
      {
         title: 'Группа',
         accessKey: 'group',
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
         title: 'Удалить',
         accessKey: 'remove',
      },
   ]
   const DATA_FOR_INSTRUCTOR = [
      {
         id: 1,
         name: 'Anna Karimova ',
         group: 'JS-15-22',
         format: 'Онлайн',
         mobile_phone: '0777114676	',
         email: 'John@gmail.com',
         remove: (item) => {
            return (
               <Buttons
                  onClick={() => alert(item.id)}
                  style={{ background: 'none' }}
               >
                  <TrashBinIcon />
               </Buttons>
            )
         },
      },
   ]
   return <Table data={DATA} headers={DATA_COLLUMN} />
}

export default App
