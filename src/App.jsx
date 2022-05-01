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
   const DATA = [
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova ',
         Специализация: 'Онлайн',
         'Номер телефона': '0777114676	',
         'E-mail': 'John@gmail.com',
         Пароль: 'tr56177ytu',
      },
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova ',
         Специализация: 'Онлайн',
         'Номер телефона': '0777114676	',
         'E-mail': 'John@gmail.com',
         Пароль: 'tr56177ytu',
      },
   ]
   const APPOINT_TEACHER = [
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova ',
         Специализация: 'Онлайн',
         'Номер телефона': '0777114676	',
         'E-mail': 'John@gmail.com',
      },
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova ',
         Специализация: 'Онлайн',
         'Номер телефона': '0777114676	',
         'E-mail': 'John@gmail.com',
      },
   ]
   const STUDENTS = [
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova',
         Группа: 'JS-15-22',
         Формат: 'Онлайн',
         'Номер телефона': '0777114676',
         'E-mail': 'John@gmail.com',
      },
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova',
         Группа: 'JS-15-22',
         Формат: 'Онлайн',
         'Номер телефона': '0777114676',
         'E-mail': 'John@gmail.com',
      },
   ]
   const INSTRUKTOR_CREATE_STUDEN = [
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova ',
         Группа: 'JS-15-22',
         'Формат обучения': 'Онлайн',
         'Номер телефона': '0777114676	',
         'E-mail': 'John@gmail.com',
         Пароль: 'tr56177ytu',
      },
      {
         ID: 1,
         'Имя Фамилия': 'Anna Karimova ',
         Группа: 'JS-15-22',
         'Формат обучения': 'Онлайн',
         'Номер телефона': '0777114676	',
         'E-mail': 'John@gmail.com',
         Пароль: 'tr56177ytu',
      },
   ]
   const data = DATA.map((newKey) => ({
      ...newKey,
      Действия: (
         <WrapperIcons>
            <Buttons
               onClick={() => alert('Eye')}
               style={{ background: 'none' }}
            >
               <EyeIcon />
            </Buttons>
            <Buttons
               onClick={() => alert('Edit')}
               style={{ background: 'none' }}
            >
               <EditIcon />
            </Buttons>
            <Buttons
               onClick={() => alert('Trash')}
               style={{ background: 'none' }}
            >
               <TrashBinIcon />
            </Buttons>
         </WrapperIcons>
      ),
   }))
   const instructorCreateStudens = INSTRUKTOR_CREATE_STUDEN.map((newkey) => ({
      ...newkey,
      Удалить: (
         <Buttons
            onClick={() => alert('Remove')}
            style={{ background: 'none' }}
         >
            <TrashBinIcon />
         </Buttons>
      ),
   }))

   return <Table data={data} />
}

export default App
