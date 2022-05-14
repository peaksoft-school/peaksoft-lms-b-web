import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { BasicModal } from '../components/UI/BasicModal'
import { CustomDatePicker } from '../components/UI/CustomDatePicker'
import { Inputs } from '../components/UI/Input'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="groups" />} />
         <Route
            path="groups/*"
            element={
               <div>
                  <BasicModal isActive>
                     <Box display="flex" justifyContent="space-between">
                        <div>
                           <CustomDatePicker />
                        </div>
                        <div>
                           <Inputs width="100px" />
                        </div>
                     </Box>
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
