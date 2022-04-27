import React from 'react'
import { Notification } from './components/UI/Notification'
import { ReactComponent as ErrorIcon } from './assets/icons/errorNotificationIcon.svg'

function App() {
   return (
      <div>
         <Notification
            backColor="succes"
            title="hello world "
            icon={<ErrorIcon />}
         />
      </div>
   )
}

export default App
