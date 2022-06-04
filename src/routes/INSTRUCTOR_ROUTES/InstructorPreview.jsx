import React from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import InstructorVideo from '../../components/INSTRUCTOR/InstructorVideo'
import { InstructorTasks } from '../../components/INSTRUCTOR/InstructorTask'

const views = {
   video: <InstructorVideo />,
   task: <InstructorTasks />,
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
