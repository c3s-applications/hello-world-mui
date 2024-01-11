import { ThemeProvider } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ThemeProvider>
)

console.log("Monkey's are cool'")
console.log(import.meta.env)