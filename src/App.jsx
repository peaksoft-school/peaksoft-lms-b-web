import React from 'react'
import { CustomDatePicker } from './components/UI/CustomDatePicker'
import { BasicModal } from './components/UI/BasicModal'
import { ImagePicker } from './components/UI/ImagePicker'

function App() {
   return (
      <div>
         <CustomDatePicker />
         <BasicModal title="hello world">
            <ImagePicker />
         </BasicModal>
      </div>
   )
}

export default App
