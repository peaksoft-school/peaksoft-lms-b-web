import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { Buttons } from '../../UI/Buttons'
import { Cards } from '../../UI/Cards'

export const CoursePanel = () => {
   return (
      <Wrapper>
         <Flex>
            <Buttons>
               <AiOutlinePlus fontSize="18px" /> Создать курс
            </Buttons>
         </Flex>
         <WrapperForCards>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
         </WrapperForCards>
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
const Flex = styled.div`
   display: flex;
   justify-content: end;
`
const WrapperForCards = styled.div`
   padding-top: 24px;
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
`
