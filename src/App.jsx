import React from 'react'
import { BasicSelect } from './components/UI/BasicSelect'
import { MainRouter } from './routes/MainRouter'

const App = () => {
   return (
      <div>
         <MainRouter />
         <BasicSelect />
      </div>
   )
}

export default App
