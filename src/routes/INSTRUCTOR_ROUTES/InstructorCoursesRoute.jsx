import React, { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { MyCourses } from '../../components/INSTRUCTOR/MyCourses'
import { MyCoursesInnerPage } from '../../components/INSTRUCTOR/MyCoursesInnerPage'

export const InstructorCoursesRoute = () => {
   // const [searchParams, setSearchParams] = useSearchParams()
   // useEffect(() => {
   //    setSearchParams({ page: 1 })
   // }, [])
   return (
      <Routes>
         <Route path="/" element={<MyCourses />} />
         <Route path="/:coursesId" element={<MyCoursesInnerPage />} />
      </Routes>
   )
}
