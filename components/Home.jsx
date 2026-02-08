import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { Link } from "react-router-dom"

const Home = () => {

  useGSAP(()=>{
    gsap.from(".arrow",{
      x:-500,
      duration:1,
      delay:1,
      opacity:0
    })
    gsap.from(".image",{
      x:600,
      opacity:0,
      duration:1
    })
  },[])

  return (
    <div className="homepage">
        <div className='content'>
            <h1>Unlock Your Dosha,</h1>
            <h1>Live Healthy with India’s Ancient Gift,</h1>
            <h1>AYURVEDA</h1>
            
            <img  className="arrow" src="https://www.onlygfx.com/wp-content/uploads/2018/11/14-chalk-arrows-11.png" alt="" />
            <h3>Click on the picture to START</h3>
        </div>
        <Link  to="/quiz" className='image'>
            <img src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </Link>  
    </div>
  )
}

export default Home