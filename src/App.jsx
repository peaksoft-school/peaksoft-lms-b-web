import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { MainRouter } from './routes/MainRouter'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
   return (
      <div>
         <ToastContainer />
         <MainRouter />
      </div>
   )
}

export default App
