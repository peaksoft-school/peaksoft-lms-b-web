import React from 'react'
import styled from 'styled-components'
import { FlexCards } from '../UI/FlexCards'
import { Cards } from '../UI/Cards'
import { ReactComponent as PersonIcon } from '../../assets/icons/PersonIcon.svg'
import { Buttons } from '../UI/Buttons'

export const MyCourses = () => {
   const option = [
      {
         id: Math.random().toString(),
         action: (groupInformation) => {},
         content: (
            <>
               <PersonIcon style={{ marginRight: '20px' }} />
               Редактировать
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (groupInformation) => {},
         content: (
            <>
               <PersonIcon style={{ marginRight: '20px' }} />
               Удалить
            </>
         ),
      },
   ]
   return (
      <Wrapper>
         <FlexCards>
            <Cards
               key="12"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
            <Cards
               key="14"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
            <Cards
               key="13"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
            <Cards
               key="13"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
            <Cards
               key="13"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
            <Cards
               key="13"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
            <Cards
               key="13"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
            <Cards
               key="13"
               title="Jetigen"
               image=""
               description="tuda suda"
               duration="2019"
               cardId="34"
               option={option}
            />
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
