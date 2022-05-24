import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { GroupsPanel } from '../../components/ADMIN/groups/GroupsPanel'
import { GroupsPanelInnerPage } from '../../components/ADMIN/groups/GroupDetailPage'

export const GroupsRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<GroupsPanel />} />
         <Route path="/:groupId" element={<GroupsPanelInnerPage />} />
      </Routes>
   )
}
