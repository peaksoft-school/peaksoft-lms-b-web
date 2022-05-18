import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, Routes, Route, Navigate } from 'react-router'
import { getAllTeachers } from '../../../store/courseSlice'
import { AppTable } from '../../UI/Table'

export const CourseInnerPage = () => {
   const dispatch = useDispatch()
   const params = useParams()
   // const { teachers } = useSelector((store) => store.courseSlice)

   // useEffect(() => {
   //    dispatch(getAllTeachers())
   // }, [])
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
   return (
      <Routes>
         <Route path="*" element={<Navigate to="teachers" />} />
         <Route
            path="teachers"
            element={<AppTable columns={DATA_COLLUMN} data={DATA} />}
         />
         <Route
            path="students/*"
            element={<AppTable columns={DATA_COLLUMN} data={[]} />}
         />
      </Routes>
   )
}
