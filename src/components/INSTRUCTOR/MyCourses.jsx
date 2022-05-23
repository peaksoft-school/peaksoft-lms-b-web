import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { FlexCards } from '../UI/FlexCards'
import { Cards } from '../UI/Cards'
import { ReactComponent as PersonIcon } from '../../assets/icons/PersonIcon.svg'
import { ReactComponent as DoubleStudent } from '../../assets/icons/DoubleStudent.svg'
import { getAllCoursesList } from '../../store/instructorCoursesSlice'

export const MyCourses = () => {
   const { courses, pages, currentPage } = useSelector(
      (store) => store.instructorSlice
   )
   const navigate = useNavigate()
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllCoursesList())
   }, [])

   const openInnerPage = (id) => {
      navigate(`${id}`)
   }
   const option = [
      {
         id: Math.random().toString(),
         action: (groupInformation) => {},
         content: (
            <>
               <PersonIcon style={{ marginRight: '20px' }} />
               Добавить студента в курс
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (groupInformation) => {},
         content: (
            <>
               <DoubleStudent style={{ marginRight: '20px' }} />
               Добавить группу в курс
            </>
         ),
      },
   ]
   return (
      <Wrapper>
         <FlexCards>
            {courses.map((course) => {
               return (
                  <Cards
                     onCardClick={() => openInnerPage(course.id)}
                     key={course.id}
                     title={course.courseName}
                     image={course.image}
                     description={course.description}
                     duration={course.duration}
                     cardId={course.id}
                     option={option}
                  />
               )
            })}
         </FlexCards>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   padding-top: 24px;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const StyledFooter = styled.footer`
   display: flex;
   justify-content: center;
   margin-top: 30px;
`
const Flex = styled.div`
   display: flex;
   justify-content: space-between;
`
