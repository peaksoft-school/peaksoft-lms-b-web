import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { FlexCards } from '../UI/FlexCards'
import { Cards } from '../UI/Cards'
import { ReactComponent as PersonIcon } from '../../assets/icons/PersonIcon.svg'
import { ReactComponent as DoubleStudent } from '../../assets/icons/DoubleStudent.svg'
import { getAllTeacherCourses } from '../../store/instructorCoursesSlice'
import { MODAL_TYPES } from '../../utils/constants/constants'
import { IndexModal } from './INSTRUCTOR_MODALS/IndexModal'

export const MyCourses = () => {
   const { courses, pages, currentPage } = useSelector(
      (store) => store.instructorSlice
   )
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [searchPaarams, setSearchParams] = useSearchParams()
   useEffect(() => {
      dispatch(getAllTeacherCourses())
   }, [])

   const openInnerPage = (id) => {
      navigate(`${id}`)
   }
   const option = [
      {
         id: Math.random().toString(),
         action: (courseInformation) => {
            setSearchParams({
               modal: MODAL_TYPES.ADDSTUDENTTOCOURSE,
               courseId: courseInformation.id,
            })
         },
         content: (
            <>
               <PersonIcon style={{ marginRight: '20px' }} />
               Добавить студента в курс
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (courseInformation) => {
            setSearchParams({
               modal: MODAL_TYPES.ADDGROUPSTOCOURSE,
               courseId: courseInformation.id,
            })
         },
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
                     allInformation={course}
                  />
               )
            })}
         </FlexCards>
         <IndexModal />
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
