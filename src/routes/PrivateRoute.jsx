import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function PrivateRoute({ Component, roles }) {
   const auth = useAuth()
   const isUserHasRole = auth.isAuth && roles.includes(auth.role)
   if (!isUserHasRole) return <Navigate to="/" replace />
   return Component
}
