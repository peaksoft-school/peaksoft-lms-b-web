import React from 'react'
import { TabsTitle } from './components/UI/Tabs'

const tabs = [
   {
      path: '/teacher',
      label: 'Учителя',
      Component: <h1>Teacher</h1>,
   },
   {
      path: '/students',
      label: 'Студенты',
      Component: <h1>Students</h1>,
   },
]

function App() {
   return <TabsTitle tabs={tabs} />
}

export default App
