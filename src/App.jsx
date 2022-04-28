import React from 'react'
import { Cards } from './components/UI/Cards'
import { CustomDatePicker } from './components/UI/CustomDatePicker'

function App() {
   return (
      <div style={{ margin: '15px' }}>
         <CustomDatePicker />
         <Cards />
      </div>
   )
}

export default App
