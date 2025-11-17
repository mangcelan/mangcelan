import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import './sass/main.scss'
// import '../src/index.css';
import App from './App.jsx'
import { HashRouter, useLocation } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
