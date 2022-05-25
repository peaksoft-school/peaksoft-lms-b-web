import React, { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { GroupsPanel } from '../../components/ADMIN/groups/GroupsPanel'
import { GroupsPanelInnerPage } from '../../components/ADMIN/groups/GroupDetailPage'

export const GroupsRoute = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   useEffect(() => {
      setSearchParams({ page: 1 })
   }, [])
   return (
      <Routes>
         <Route path="/" element={<GroupsPanel />} />
         <Route path="/:groupId" element={<GroupsPanelInnerPage />} />
      </Routes>
   )
}
