import React from 'react'
import { useBeforeunload } from 'react-beforeunload'
import { useSelector } from 'react-redux'
import { AUTH } from '../utils/constants/constants'
import { setLocalStorage } from '../utils/helpers/helpers'

export const AdminPage = () => {
   const auth = useSelector((state) => state.auth)
   useBeforeunload((event) => {
      event.preventDefault()
      setLocalStorage(AUTH, auth)
   })
   return <div>AdimPage</div>
}
