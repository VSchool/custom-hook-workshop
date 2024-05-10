import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThingProvider } from './context/ThingProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThingProvider>
      <App />
    </ThingProvider>
  </React.StrictMode>,
)
