import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'
import AppHeader from './components/app-header'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
