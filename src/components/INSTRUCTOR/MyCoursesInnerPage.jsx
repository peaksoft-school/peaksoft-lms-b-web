import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { InstructorStudents } from './InstructorStudents'
import { InstructorMaterials } from './InstructorMaterials'

export const MyCoursesInnerPage = () => {
   const dispatch = useDispatch()
   const [searchParams] = useSearchParams()
   const { coursesId } = useParams()
   const tabs = searchParams.get('tabs')
   // const getLessons = () => {
   //    dispatch(getMaterialsByCourseId(11))
   // }
   //    useEffect(() => {
   //       dispatch(getStudentsByGroupId(groupId))
   //    }, [])
   //    const { table } = useSelector((state) => state.groupSlice)

   if (tabs === 'students') {
      return <InstructorStudents coursesId={coursesId} />
   }
   if (tabs === 'material') {
      return <InstructorMaterials />
   }
   return null
}
