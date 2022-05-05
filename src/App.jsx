import React, { useState } from 'react'
import { BasicSelect } from './components/UI/BasicSelect'

const GENDERS = [
   { id: 1, title: 'Beybars' },
   { id: 2, title: 'Daana' },
   { id: 3, title: 'Baya' },
]

function App() {
   const [value, setValue] = useState('')
   const onChoose = (selected) => {
      // console.log(selected)
   }
   return (
      <div style={{ width: '300px' }}>
         <BasicSelect
            data={GENDERS}
            onChoose={onChoose}
            setValue={setValue}
            value={value}
            placeholder="Name"
         />
      </div>
   )
}

export default App
