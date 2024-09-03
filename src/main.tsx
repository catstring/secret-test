import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DisplayApiBaseUrl from './DisplayApiBaseUrl'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DisplayApiBaseUrl />
  </StrictMode>,
)
