import React from 'react'
import { BasicModal } from './components/UI/BasicModal'
import { MultiSelect } from './components/UI/MultiSelect'

function App() {
   return (
      <div>
         <BasicModal isActiveFooter={false} isActive>
            <MultiSelect />
         </BasicModal>
      </div>
   )
}

export default App
