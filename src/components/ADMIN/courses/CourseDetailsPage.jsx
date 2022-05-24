import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router'
import styled from 'styled-components'
import {
   getStudentsByCourseId,
   getTeachersByCourseId,
} from '../../../store/courseSlice'
import { AppTable } from '../../UI/Table'

export const CourseInnerPage = () => {
   const dispatch = useDispatch()
   const [searchParams] = useSearchParams()
   const tabs = searchParams.get('tabs')
   const { coursesId } = useParams()
   const { coursesDetails } = useSelector((store) => store.courseSlice)

   useEffect(() => {
      if (tabs === 'teachers') dispatch(getTeachersByCourseId(coursesId))
      if (tabs === 'students') dispatch(getStudentsByCourseId(coursesId))
   }, [tabs])
   const DATA_COLLUMN = {
      teachers: [
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
            title: 'E-Mail',
            accessKey: 'email',
         },
      ],
      students: [
         {
            title: 'ID',
            accessKey: 'id',
         },
         {
            title: 'Имя Фамилия',
            accessKey: 'fullName',
         },
         {
            title: 'Группа',
            accessKey: 'groupName',
         },
         {
            title: 'Формат',
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
      ],
   }

   return (
      <Wrapper>
         <AppTable columns={DATA_COLLUMN[tabs]} data={coursesDetails} />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   padding-top: 24px;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
`
