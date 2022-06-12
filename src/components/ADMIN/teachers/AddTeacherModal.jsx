import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Inputs } from '../../UI/Input'
import { BasicModal } from '../../UI/BasicModal'
import { useInput } from '../../../hooks/useInput'
import { addTeachers } from '../../../store/adminTeachersSlice'
import { MaskedInput } from '../../UI/MuskedInput'

export const AddTeacherModal = ({ setSearchParams, onClose }) => {
   const dispatch = useDispatch()
   const [value, onChangeInputs] = useInput({
      teacherName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      specialization: '',
      password: '',
   })
   const onSubmit = (e) => {
      e.preventDefault()
      dispatch(
         addTeachers({
            ...value,
            phoneNumber: value.phoneNumber.replace(/\s/g, ''),
         })
      )
      setSearchParams()
   }
   const {
      teacherName,
      lastName,
      phoneNumber,
      email,
      specialization,
      password,
   } = value

   const isDisabledModal = useCallback(() => {
      return (
         teacherName &&
         lastName &&
         phoneNumber &&
         email &&
         specialization &&
         password
      )
   }, [teacherName, lastName, phoneNumber, email, specialization, password])

   return (
      <BasicModal
         isDisabled={isDisabledModal()}
         isActive
         cancelTitle="Отмена"
         successTitle="Добавить"
         title="Добавить учителя"
         modalCloseHanlder={onClose}
         addHandler={onSubmit}
      >
         <Inputs
            margin="0 0 12px 0"
            placeholder="Имя"
            name="teacherName"
            onChange={(e) => onChangeInputs(e)}
            value={value.teacherName}
         />

         <Inputs
            margin="0 0 12px 0"
            placeholder="Фамилия"
            name="lastName"
            onChange={(e) => onChangeInputs(e)}
            value={value.lastName}
         />

         <MaskedInput
            margin="0 0 12px 0"
            name="phoneNumber"
            onChange={(e) => onChangeInputs(e)}
            value={value.phoneNumber}
         />

         <Inputs
            margin="0 0 12px 0"
            placeholder="Email"
            name="email"
            onChange={(e) => onChangeInputs(e)}
            value={value.email}
         />

         <Inputs
            margin="0 0 12px 0"
            placeholder="Специализация"
            name="specialization"
            onChange={(e) => onChangeInputs(e)}
            value={value.specialization}
         />

         <Inputs
            margin="0 0 12px 0"
            placeholder="Пароль"
            name="password"
            onChange={(e) => onChangeInputs(e)}
            value={value.password}
         />
      </BasicModal>
   )
}
