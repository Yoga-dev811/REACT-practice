import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import LoginForm from './LoginForm'
import Dashboard from './Dashboard'
import Footer from './footer'
import { Routes,Route } from 'react-router-dom'
import Register from './register'
import UserManagement from './userManagement'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

  <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/userManagement" element={<UserManagement/>}/>
        <Route path="/" element={

          <div className="flex flex-col min-h-screen">   {/* to wrap all the things footer align we have tro put everything with flex and min-h-screen */}
  {/* to wrap all the things footer align we have tro put everything with flex and min-h-screen */}
    <div className="flex-1">
         <LoginForm/>
</div>
         <Footer/>
         </div>
        } />

        <Route path="/register" element={<Register/>} />
      </Routes>

         


     
    </>
  )
}

export default App
