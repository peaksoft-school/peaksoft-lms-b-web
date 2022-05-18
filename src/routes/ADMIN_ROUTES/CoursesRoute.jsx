import React, { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { CoursePanel } from '../../components/ADMIN/courses/CoursePanel'
import { CourseInnerPage } from '../../components/ADMIN/courses/CourseInnerPage'

export const CoursesRoutes = () => {
   // const [searchParams, setSearchParams] = useSearchParams()
   // useEffect(() => {
   //    setSearchParams({ page: 1 })
   // }, [])
   return (
      <Routes>
         <Route path="/" element={<CoursePanel />} />
         <Route path="/:coursesId" element={<CourseInnerPage />} />
      </Routes>
   )
}
