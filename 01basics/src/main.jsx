import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserInfo from "./AppTwo.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UserInfo/>
  </React.StrictMode>,
)
