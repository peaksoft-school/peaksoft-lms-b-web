import React from 'react'
import { CustomDatePicker } from './components/UI/CustomDatePicker'
import { BasicModal } from './components/UI/BasicModal'
import { ImagePicker } from './components/UI/ImagePicker'
import { ConfirmModal } from './components/ConfirmModal'

function App() {
   return (
      <div>
         <CustomDatePicker />
         <BasicModal title="hello world">
            <ImagePicker />
         </BasicModal>
         <ConfirmModal />
      </div>
   )
}

export default App
