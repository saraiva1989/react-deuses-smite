import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./css/index.css"
import { GeralProvider } from './contexts/geralContext'
import { ListaDeusesProvider } from './contexts/listaDeusesContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeralProvider>
    <ListaDeusesProvider>
    <App />
    </ListaDeusesProvider>
    </GeralProvider>
  </React.StrictMode>
)
