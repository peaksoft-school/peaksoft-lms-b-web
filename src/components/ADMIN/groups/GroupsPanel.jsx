import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Buttons } from '../../UI/Buttons'
import { FlexCards } from '../../UI/FlexCards'
import { Cards } from '../../UI/Cards'
import { ReactComponent as EditIcon } from '../../../assets/icons/EditIcon.svg'
import { ReactComponent as Trash } from '../../../assets/icons/TrashBin.svg'
import { BasicModal } from '../../UI/BasicModal'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { getGroupsList } from '../../../store/adminGroupSlice'
import { BasicPagination } from '../../UI/BasicPagination'
import { ConditionalRender } from '../../UI/ConditionalRender'
import { CustomDatePicker } from '../../UI/CustomDatePicker'

export const GroupsPanel = () => {
   const [isActive, setIsActive] = useState(null)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getGroupsList())
   }, [])
   const { currentPage, error, groups, isLoading, pages } = useSelector(
      (store) => store.groupSlice
   )

   const modalHandler = (item) => {
      setIsActive(item)
   }
   const closeModalHandler = () => {
      setIsActive(false)
   }
   const getPhotoHandler = (foto) => {
      console.log(foto)
   }
   const createNewGroupHandler = (groupData) => {
      console.log(groupData)
   }
   const option = [
      {
         id: Math.random().toString(),
         action: () => {
            modalHandler('edit')
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
         action: () => {
            modalHandler('delete')
         },
         content: (
            <>
               <Trash style={{ marginRight: '20px' }} />
               Удалить
            </>
         ),
      },
   ]

   let Modal
   if (isActive === 'addCourse') {
      Modal = (
         <BasicModal
            title="Создать  курс"
            isActive={!!isActive}
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModalHandler}
         >
            <ImagePicker getPhoto={getPhotoHandler} />
            <FlexInput>
               <Inputs
                  width="327"
                  placeholder="Название курса"
                  // value={values.courseName}
                  name="courseName"
               />
               <CustomDatePicker width="149px" />
            </FlexInput>
            <Textarea placeholder="Описание курса" />
         </BasicModal>
      )
   } else if (isActive === 'edit') {
      Modal = (
         <BasicModal
            title="Pедактировать"
            isActive={!!isActive}
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={closeModalHandler}
         >
            <ImagePicker />
            <FlexInput>
               <Inputs width="327" placeholder="Название курса" />
               <CustomDatePicker width="149px" />
            </FlexInput>
            <Textarea placeholder="Описание курса" />
         </BasicModal>
      )
   } else if (isActive === 'delete') {
      Modal = (
         <ConfirmModal isActive={!!isActive} toggleModal={closeModalHandler} />
      )
   }

   return (
      <Wrapper>
         <Flex>
            <Buttons
               onClick={() => {
                  modalHandler('addCourse')
               }}
            >
               <AiOutlinePlus fontSize="18px" /> Создать курс
            </Buttons>
         </Flex>
         <FlexCards>
            {groups.map((el) => (
               <Cards
                  key={el.id}
                  title={el.title}
                  image={el.image}
                  description={el.description}
                  duration={el.date}
                  cardId={el.id}
                  option={option}
               />
            ))}
         </FlexCards>
         <ConditionalRender pages={pages}>
            <StyledFooter>
               <BasicPagination pages={pages} />
            </StyledFooter>
         </ConditionalRender>
         {Modal}
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
const FlexInput = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 25px;
`
const Textarea = styled.textarea`
   width: 491px;
   height: 123px;
   resize: none;
   margin-top: 12px;
   border-radius: 10px;
   outline: none;
   padding: 10px 18px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: var(--base-font);
   border: 1px solid #d4d4d4;
   ::placeholder {
      color: #8d949e;
   }
   :focus {
      border: 1px solid #3772ff;
   }
`
