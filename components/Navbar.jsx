import { useContext } from "react"
import UserContext from "../Context/UserContext"
import { Link } from "react-router-dom"
import QuizContext from "../Context/QuizContext"
import logo from "../src/assets/logo.png"

const Navbar = () => {
  const userData=useContext(UserContext)
  const {setQuizContext}=useContext(QuizContext)

  const handleModal=()=>{
    userData.showModal((prev)=>(!prev))
  }

  return (
    <div className='navbar'>
        <div className='navbar-box'>
          <img src={logo} alt="" />
          <Link to="/"><p id="websiteName">AyurFit</p></Link>
        </div>
        <div className='navbar-box'>
          <Link to="/blog"><p>Dekh dekh dekh...</p></Link>
          </div>
        <div className='navbar-box'>
          <Link to={"/quiz"} onClick={()=>setQuizContext("Ready")}><p>Check Dosha</p></Link>
        </div>
        <div className='navbar-box'>
          <p onClick={handleModal}>User : {userData.user}</p>
          </div>
    </div>
  )
}

export default Navbar