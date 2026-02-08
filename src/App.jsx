import { useContext, useEffect } from 'react'
import UserContext from '../Context/UserContext'
import Home from '../components/Home'
import Modal from '../components/Modal'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quiz from '../pages/quiz.jsx'
import Blog from '../pages/blog.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Instructions from '../components/Instructions.jsx'
import QuizModal from '../components/QuizModal.jsx'


function App() {

  const {modal,showModal}=useContext(UserContext)

  useEffect(()=>{
    console.log('Modal state changed:', modal);
  },[modal])

  return (
    <>
      <BrowserRouter>  
        <Navbar/> 

        <div  hidden={!modal} className="modal-wrapper" onClick={()=>showModal(false)}></div>
        {modal && <Modal/>}   

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quiz' element={<Quiz/>}>
            <Route path='instructions' element={<Instructions/>}/>
            <Route path='quizModal' element={<QuizModal/>}/>
          </Route>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
