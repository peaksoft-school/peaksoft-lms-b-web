import React, { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { MyCoursesInnerPage } from '../../components/INSTRUCTOR/MyCoursesInnerPage'
import { MyCourses } from '../../components/INSTRUCTOR/MyCourses'
import { TaskCreater } from '../../components/INSTRUCTOR/TASK_CREATER/TaskCreater'
import { InstructorPreview } from './InstructorPreview'
import { TestEditor } from '../../components/INSTRUCTOR/TEST_EDITOR/TestEditor'

export const InstructorCoursesRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<MyCourses />} />
         <Route path="/:coursesId/*" element={<MyCoursesInnerPage />} />
         <Route
            path="/:coursesId/addTasksForLesson/:lessonId"
            element={<TaskCreater />}
         />
         <Route
            path="/:coursesId/addTestForLesson/:lessonId"
            element={<TestEditor />}
         />
         <Route
            path="/:coursesId/previewPage/:subtaskId"
            element={<InstructorPreview />}
         />
      </Routes>
   )
}
