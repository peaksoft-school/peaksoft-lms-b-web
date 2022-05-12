import React, { useState } from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { MeetBalls } from './MeetBalls'
import { ReactComponent as FixIcon } from '../../assets/icons/FixIcon.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/EditIcon.svg'
import { ReactComponent as Trash } from '../../assets/icons/TrashBin.svg'
import DefaultCardImage from '../../assets/images/DefaultCardImage.png'

const option = {
   COURSES: [
      {
         id: Math.random().toString(),
         action: (obj) => {
            alert(obj)
         },
         content: (
            <>
               <FixIcon style={{ marginRight: '20px' }} />
               Назначить учителя
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (obj) => {
            alert(obj)
         },
         content: (
            <>
               {' '}
               <EditIcon style={{ marginRight: '20px' }} />
               Редактировать
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (obj) => {
            alert(obj)
         },
         content: (
            <>
               <Trash style={{ marginRight: '20px' }} />
               Удалить
            </>
         ),
      },
   ],
   GROUPS: [
      {
         id: Math.random().toString(),
         action: (obj) => {
            alert(obj)
         },
         content: (
            <>
               {' '}
               <EditIcon style={{ marginRight: '20px' }} />
               Редактировать
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (obj) => {
            alert(obj)
         },
         content: (
            <>
               <Trash style={{ marginRight: '20px' }} />
               Удалить
            </>
         ),
      },
   ],
}

export const Cards = ({
   image,
   title,
   duration,
   description,
   onCardClick,
   peace,
   cardId,
}) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const clickHandler = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const closeHandler = (action) => {
      setAnchorEl(null)
      action({ id: cardId })
   }

   return (
      <Card onClick={onCardClick}>
         {image ? (
            <WrapperImg src={image} alt="foto" />
         ) : (
            <WrapperImg src={DefaultCardImage} alt="foto" />
         )}

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
               option={option}
               peace={peace}
            />
         </WrapperOptionsIcon>
      </Card>
   )
}
const Card = styled.div`
   min-width: 200px;
   max-width: 260px;
   height: 311px;
   display: flex;
   flex-direction: column;
   background: #ffffff;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   border-radius: 10px;
`
const WrapperImg = styled.img`
   width: 100%;
   height: 171px;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
`
const WrapperGroupTitle = styled.div`
   min-width: 100%;
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
