import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { BasicModal } from '../components/UI/BasicModal'
import { CustomDatePicker } from '../components/UI/CustomDatePicker'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="groups" />} />
         <Route
            path="groups/*"
            element={
               <div>
                  <BasicModal isActive>
                     <CustomDatePicker />
                  </BasicModal>
               </div>
            }
         />
         <Route path="courses/*" element={<div>courses</div>} />
         <Route path="teachers/*" element={<div>teachers</div>} />
         <Route path="students/*" element={<div>students</div>} />
      </Routes>
   )
}
