import React, { useEffect } from 'react'
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
               <h1>{presentation.name}</h1>
               <p>{presentation.description}</p>
               <iframe title="hello world " src={presentation.file} />
            </>
         ) : (
            ''
         )}
      </div>
   )
}
