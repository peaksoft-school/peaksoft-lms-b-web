import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { GroupsPanel } from './GroupsPanel'
import { GroupsPanelInnerPage } from './GroupsPanelInnerPage'

export const GroupsRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<GroupsPanel />} />
         <Route path="/:groupId" element={<GroupsPanelInnerPage />} />
      </Routes>
   )
}
