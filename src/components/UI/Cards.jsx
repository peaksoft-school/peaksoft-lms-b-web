import React from 'react'
import styled from 'styled-components'
import { Title } from './Title'

export const Cards = () => {
   return (
      <Card>
         <WrapperImg>IMG</WrapperImg>
         <WrapperGroupTitle>
            <Title
               lineHeight="25px"
               fontWeight="600, bold"
               fontSize="18px"
               color="#1D293F"
            >
               Data Engineer
            </Title>
            <Title
               lineHeight="140.1%"
               fontWeight="400"
               fontSize="12px"
               color="#1D293F"
            >
               2019-2020
            </Title>
         </WrapperGroupTitle>
         <WrapperInfoGroup>
            <InfoGroup
               lineHeight="22px"
               fontWeight="400"
               fontSize="16px"
               color="#1D293F"
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
               pretium placerat ut ...
            </InfoGroup>
         </WrapperInfoGroup>
      </Card>
   )
}
const Card = styled.div`
   width: 270px;
   height: 311px;
   display: flex;
   flex-direction: column;
   background: #ffffff;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   border-radius: 10px;
`
const WrapperImg = styled.div`
   width: 100%;
   height: 171px;
   background: red;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
`
const WrapperGroupTitle = styled.div`
   width: 270px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   p {
      margin: 16px 18px 10px 18px;
   }
`
const WrapperInfoGroup = styled.div`
   width: 234px;
   height: 66px;
`
const InfoGroup = styled(Title)`
   width: 270px;
   word-wrap: break-word;
   padding: 0 18px 8px 18px;
`
