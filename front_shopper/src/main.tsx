import { ContextGlobalComponent } from './Context/ContextGlobal'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextGlobalComponent>
      <App />
    </ContextGlobalComponent>
  </React.StrictMode>
)