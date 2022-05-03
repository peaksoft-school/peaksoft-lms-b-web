import React, { useState } from 'react'
import { RadioButton } from './components/UI/RadioButton'
import { Switcher } from './components/UI/Switcher'

function App() {
   const [click, setClick] = useState(false)

   const toggleHandler = () => {
      setClick((prev) => !prev)
   }
   console.log(click)

   return (
      <div>
         <RadioButton checked={click} onChange={toggleHandler} />
         <Switcher />
      </div>
   )
}

export default App
