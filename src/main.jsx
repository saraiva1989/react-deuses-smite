import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GeralProvider } from './contextos/GeralContext'
import { ListaProvider } from './contextos/ListaContext'
import './css/geral.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeralProvider>
      <ListaProvider>
        <App />
      </ListaProvider>
    </GeralProvider>
  </React.StrictMode>
)
