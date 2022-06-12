import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { getAllTeachers } from '../../../store/courseSlice'
import { AppTable } from '../../UI/Table'

export const CourseInnerPage = () => {
   const dispatch = useDispatch()
   const params = useParams()
   const [searchParams] = useSearchParams()
   const tabs = searchParams.get('tabs')
   const { teachers } = useSelector((store) => store.courseSlice)

   useEffect(() => {
      dispatch(getAllTeachers())
   }, [])
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

   return <AppTable columns={DATA_COLLUMN} data={[]} />
}
