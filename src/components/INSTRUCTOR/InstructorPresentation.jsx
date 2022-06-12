import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getPresentationById } from '../../store/instructorCoursesSlice'

export const InstructorPresentation = () => {
   const dispatch = useDispatch()
   const { subtaskId } = useParams()
   const presentation = useSelector(
      (store) => store.instructorSlice.presentation
   )
   useEffect(() => {
      dispatch(getPresentationById(subtaskId))
   }, [])
   return (
      <div>
         {presentation ? (
            <>
               <PresentationName>{presentation.name}</PresentationName>
               <PresentationDescription>
                  {presentation.description}
               </PresentationDescription>
               <PresentationLink href={presentation.file}>
                  нажмите чтоб скачать файл
               </PresentationLink>
            </>
         ) : (
            ''
         )}
      </div>
   )
}

const PresentationName = styled.h1`
   font-size: 30px;
   font-family: var(--base-font);
   margin-bottom: 30px;
`
const PresentationDescription = styled.p`
   font-family: var(--base-font);
   margin-bottom: 20px;
`
const PresentationLink = styled.a`
   font-family: var(--base-font);
`
