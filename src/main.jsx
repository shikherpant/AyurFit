import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from '../Context/UserProvider.jsx'
import QuizProvider from '../Context/QuizProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <QuizProvider>
        <App/>
      </QuizProvider>
    </UserProvider> 
  </React.StrictMode>,
)
