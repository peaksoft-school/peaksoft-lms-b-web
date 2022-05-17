import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { Buttons } from '../../UI/Buttons'
import { FlexCards } from '../../UI/FlexCards'
import { Cards } from '../../UI/Cards'
import { ReactComponent as EditIcon } from '../../../assets/icons/EditIcon.svg'
import { ReactComponent as Trash } from '../../../assets/icons/TrashBin.svg'
import { getGroupsList } from '../../../store/adminGroupSlice'
import { BasicPagination } from '../../UI/BasicPagination'
import { ConditionalRender } from '../../UI/ConditionalRender'
import { GroupModal } from './GroupModal'

export const GroupsPanel = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [searchParams, setSearchParams] = useSearchParams()
   useEffect(() => {
      dispatch(getGroupsList())
   }, [])
   const { groups, pages } = useSelector((store) => store.groupSlice)

   const [isActive, setIsActive] = useState({
      action: null,
      groupInformation: {},
   })

   const openInnerPage = (id) => {
      navigate(`${id}`)
   }

   const option = [
      {
         id: Math.random().toString(),
         action: (groupInformation) => {
            const { id: groupId } = groupInformation
            setSearchParams({ modal: 'updateGroup', groupId })
         },
         content: (
            <>
               <EditIcon style={{ marginRight: '20px' }} />
               Редактировать
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (groupInformation) => {
            const { id: groupId } = groupInformation
            setSearchParams({ modal: 'deleteGroup', groupId })
         },
         content: (
            <>
               <Trash style={{ marginRight: '20px' }} />
               Удалить
            </>
         ),
      },
   ]

   return (
      <Wrapper>
         <Flex>
            <Buttons
               onClick={() => {
                  setSearchParams({ modal: 'addGroup' })
               }}
            >
               <AiOutlinePlus fontSize="18px" /> Создать курс
            </Buttons>
         </Flex>
         <FlexCards>
            {groups.map((el) => (
               <Cards
                  onCardClick={() => openInnerPage(el.id)}
                  key={el.id}
                  title={el.groupName}
                  image={el.image}
                  description={el.description}
                  duration={el.duration}
                  cardId={el.id}
                  option={option}
                  allInformation={el}
               />
            ))}
         </FlexCards>
         <ConditionalRender pages={pages}>
            <StyledFooter>
               <BasicPagination pages={pages} />
            </StyledFooter>
         </ConditionalRender>
         <GroupModal />
      </Wrapper>
   )
}

const StyledFooter = styled.footer`
   margin-left: 50vh;
   margin-top: 30px;
`
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
