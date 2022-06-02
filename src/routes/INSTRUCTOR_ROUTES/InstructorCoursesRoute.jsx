import React, { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { MyCoursesInnerPage } from '../../components/INSTRUCTOR/MyCoursesInnerPage'
import { MyCourses } from '../../components/INSTRUCTOR/MyCourses'
import { TextEditor } from '../../components/INSTRUCTOR/TEXT_EDITOR/TextEditor'
import { TaskCreater } from '../../components/INSTRUCTOR/TASK_CREATER/TaskCreater'

export const InstructorCoursesRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<MyCourses />} />
         <Route path="/:coursesId/*" element={<MyCoursesInnerPage />} />
         <Route
            path="/:coursesId/addTasksForLesson/:lessonId"
            element={<TaskCreater />}
         />
      </Routes>
   )
}
