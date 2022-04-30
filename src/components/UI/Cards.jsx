import React, { useState } from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { MeetBalls } from './MeetBalls'

export const Cards = ({
   image,
   title,
   duration,
   description,
   onCardClick,
   onEdit,
   onDelete,
   onFix,
}) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const clickHandler = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const closeHandler = () => {
      setAnchorEl(null)
   }
   const deleteHandler = () => {
      onDelete()
      closeHandler()
   }
   const fixHandler = () => {
      onFix()
      closeHandler()
   }
   const editHandler = () => {
      onEdit()
      closeHandler()
   }
   return (
      <Card onClick={onCardClick}>
         <WrapperImg>{image}</WrapperImg>
         <WrapperGroupTitle>
            <Title
               lineHeight="25px"
               fontWeight="600, bold"
               fontSize="18px"
               color="#1D293F"
            >
               {title}
            </Title>
            <Title
               lineHeight="140.1%"
               fontWeight="400"
               fontSize="12px"
               color="#1D293F"
            >
               {duration}
            </Title>
         </WrapperGroupTitle>
         <WrapperInfoGroup>
            <InfoGroup
               lineHeight="22px"
               fontWeight="400"
               fontSize="16px"
               color="#1D293F"
            >
               {description}
            </InfoGroup>
         </WrapperInfoGroup>
         <WrapperOptionsIcon>
            <MeetBalls
               open={open}
               handleClick={clickHandler}
               handleClose={closeHandler}
               anchorEl={anchorEl}
               deleteHandler={deleteHandler}
               fixHandler={fixHandler}
               editHandler={editHandler}
            />
         </WrapperOptionsIcon>
      </Card>
   )
}
const Card = styled.div`
   min-width: 270px;
   max-width: 340px;
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
   min-width: 270px;
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
const WrapperOptionsIcon = styled.div`
   display: flex;
   justify-content: end;
   margin: 8px 21px 13px;
   cursor: pointer;
`
