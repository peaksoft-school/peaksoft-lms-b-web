import React from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { InstructorStudents } from './InstructorStudents'
import { InstructorMaterials } from './InstructorMaterials'

export const MyCoursesInnerPage = () => {
   const [searchParams] = useSearchParams()
   const { coursesId } = useParams()
   const tabs = searchParams.get('tabs')
   if (tabs === 'students') {
      return <InstructorStudents coursesId={coursesId} />
   }
   if (tabs === 'material') {
      return <InstructorMaterials coursesId={coursesId} />
   }
   return null
}
