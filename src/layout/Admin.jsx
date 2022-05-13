import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Buttons } from '../components/UI/Buttons'
import { logout } from '../store/authSlice'
import { BasicModal } from '../components/UI/BasicModal'
import { UserMultiSelect } from '../components/UI/UserMultiSelect'

const data = [
   {
      name: 'jetigen',
      id: 'jaaals',
   },
   {
      name: 'jbaes',
      id: 'jalasds',
   },
   {
      name: 'beybars',
      id: 'jaladss',
   },
   {
      name: 'jetigenasdfas',
      id: 'jalasds',
   },
]

export const Admin = () => {
   const dispatch = useDispatch()
   const [state, setState] = useState([])
   const logutHandler = () => {
      dispatch(logout())
   }
   return (
      <div>
         AdimPage
         <BasicModal isActive>
            <UserMultiSelect
               data={data}
               selectedUsers={state}
               setSelectedUsers={setState}
            />
         </BasicModal>
         <Buttons onClick={logutHandler}>logout</Buttons>
      </div>
   )
}
