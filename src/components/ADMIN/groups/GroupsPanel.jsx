import React, { useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { Buttons } from '../../UI/Buttons'
import { FlexCards } from '../../UI/FlexCards'
import { Cards } from '../../UI/Cards'
import { ReactComponent as EditIcon } from '../../../assets/icons/EditIcon.svg'
import { ReactComponent as Trash } from '../../../assets/icons/TrashBin.svg'
import { getGroupsList } from '../../../store/adminGroupSlice'
import { PaginationLink } from '../../UI/BasicPagination'
import { ConditionalRender } from '../../UI/ConditionalRender'
import { GroupModal } from './GroupModal'
import { Notification } from '../../UI/Notification'
import { authActions } from '../../../store/authSlice'

export const GroupsPanel = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const [searchParams, setSearchParams] = useSearchParams()
   const { groups, pages } = useSelector((store) => store.groupSlice)
   const { authSuccess } = useSelector((store) => store.auth)
   const page = searchParams.get('page')

   useEffect(() => {
      dispatch(getGroupsList(page || 1))
      if (authSuccess) {
         setTimeout(() => {
            dispatch(authActions.finishTheNotificationAuth())
         }, 3000)
      }
   }, [page])

   const openInnerPage = (id) => {
      navigate(`${id}`)
   }

   const option = [
      {
         id: Math.random().toString(),
         action: (groupInformation) => {
            const { id: groupId } = groupInformation
            setSearchParams({ modal: 'updateGroup', groupId, page })
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
            setSearchParams({ modal: 'deleteGroup', groupId, page })
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
         <Notification
            notificationType="success"
            isActive={authSuccess}
            title="вы успешно вошли в ваш аккаунт"
         />
         <Flex>
            <Buttons
               onClick={() => {
                  setSearchParams({ modal: 'addGroup', page })
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
         <ConditionalRender isActive={pages > 1}>
            <StyledFooter>
               <PaginationLink path={pathname} count={pages} />
            </StyledFooter>
         </ConditionalRender>
         <GroupModal />
      </Wrapper>
   )
}

const StyledFooter = styled.footer`
   display: flex;
   justify-content: center;
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
