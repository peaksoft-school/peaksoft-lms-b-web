import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ Component, roles }) {
   const { role } = useSelector((state) => state.auth.user)
   const isUserHasRole = role && roles.includes(role)
   if (!isUserHasRole) return <Navigate to="/" replace />
   return Component
}
