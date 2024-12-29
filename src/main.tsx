import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import MainContext from './contexts/MainContext.tsx'
import QueryProvider from './lib/react-query/QueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <MainContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainContext>
    </QueryProvider>
  </StrictMode>,
)
