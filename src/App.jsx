import React from 'react'
import { Routes, Route } from 'react-router'
import BreadCrumb from './components/UI/BreadCrumb'

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<div>hello wordl</div>} />
            <Route
               path="/lessons/user/*"
               element={
                  <h2>
                     <BreadCrumb />
                  </h2>
               }
            />
            <Route path="/lessons/:id" element={<div>lessons</div>} />
         </Routes>
      </div>
   )
}

export default App
