import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { CodeItem } from './TASKS_PREVIEW/CodeItem'
import { FileItem } from './TASKS_PREVIEW/FileItem'
import { TextItem } from './TASKS_PREVIEW/TextItem'
import { ImageItem } from './TASKS_PREVIEW/ImageItem'
import { LinkItem } from './TASKS_PREVIEW/LinkItem'
import { getTasksByLessonId } from '../../store/instructorCoursesSlice'

export const InstructorTasks = () => {
   const dispatch = useDispatch()
   const { name, resources } = useSelector(
      (store) => store.instructorSlice.tasks
   )
   console.log(resources)
   const { lessonId } = useParams()
   useEffect(() => {
      dispatch(getTasksByLessonId(lessonId))
   }, [])
   return (
      <div>
         <StyledHeader>{name}</StyledHeader>
         {resources
            ? resources.map((task) => {
                 console.log(task)
                 if (task.resourceType === 'FILE') {
                    return (
                       <FileItem fileLink={task.value} fileName={task.name} />
                    )
                 }
                 if (task.resourceType === 'LINK') {
                    return <LinkItem link={task.value} linkName={task.name} />
                 }
                 if (task.resourceType === 'CODE') {
                    return <CodeItem code={task.value} />
                 }
                 if (task.resourceType === 'TEXT') {
                    return <TextItem text={task.value} />
                 }
                 if (task.resourceType === 'IMAGE') {
                    return <ImageItem imageLink={task.value} />
                 }
                 return <div>Unidentified type</div>
              })
            : ''}
      </div>
   )
}

const StyledHeader = styled.h1`
   font-size: 20px;
   font-family: var(--base-font);
`
