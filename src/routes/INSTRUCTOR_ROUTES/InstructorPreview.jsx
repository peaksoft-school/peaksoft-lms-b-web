import React from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import InstructorVideo from '../../components/INSTRUCTOR/InstructorVideo'
import { InstructorTasks } from '../../components/INSTRUCTOR/InstructorTask'
import { InstructorPresentation } from '../../components/INSTRUCTOR/InstructorPresentation'
import { InstructorTest } from '../../components/INSTRUCTOR/InstructorTest'

const views = {
   video: <InstructorVideo />,
   task: <InstructorTasks />,
   presentation: <InstructorPresentation />,
   test: <InstructorTest />,
}

export const InstructorPreview = () => {
   const [searchParams] = useSearchParams()
   const view = searchParams.get('view')
   return <StyledWrapper>{views[view]}</StyledWrapper>
}

const StyledWrapper = styled.div`
   width: 100%;
   min-height: 724px;
   background-color: #ffffff;
   border-radius: 10px;
   margin-top: 24px;
   padding: 24px 20px;
`
