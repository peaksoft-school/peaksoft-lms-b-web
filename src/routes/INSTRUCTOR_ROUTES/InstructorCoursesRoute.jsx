import React, { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { MyCoursesInnerPage } from '../../components/INSTRUCTOR/MyCoursesInnerPage'
import { MyCourses } from '../../components/INSTRUCTOR/MyCourses'

export const InstructorCoursesRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<MyCourses />} />
         <Route path="/:coursesId/*" element={<MyCoursesInnerPage />} />
      </Routes>
   )
}
