import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

const domNode = document.getElementById("root");
const root = createRoot(domNode).render(
  <StrictMode>
    <App />
  </StrictMode>
)