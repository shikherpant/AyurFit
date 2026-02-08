import { useContext, useEffect, useState } from "react"
import UserContext from "../Context/UserContext"

const Modal = () => {

    useEffect(()=>{
        document.body.style.overflowY="hidden"
        return(
            //cleanup function
            ()=>{ document.body.style.overflowY="auto" }
        )
    },[])

    const {showModal,setUser}=useContext(UserContext)
    const [userData,setUserData]=useState({
        name:"",
        age:""
    })

    const handleSubmitData=()=>{
        event.preventDefault()
        console.log(userData)
        if(userData.name.trim()===""){
            alert("Please Enter Name")
            return
        }
        setUser(userData.name)
        setUserData({
            name:"",
            age:""
        })
        showModal(false)
    }

  return (
    <div className="modal">

        <div className="left">
            <img src="https://images.unsplash.com/photo-1596344084757-b83f2081da8b?q=80&w=1585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="right">
            <div className="icon">
                <i onClick={()=>showModal(false)} className="ri-close-large-line"></i>
            </div>
        
            <form type="submit">
                <h1>WELCOME to AyurFit !</h1>
                <h3>Enter your good name and age to continue and unlock your dosha.</h3>
                <input type="text" placeholder="Enter name"
                  value={userData.name}
                  onChange={(event)=>setUserData({...userData,"name":event.target.value})}/>
                <br></br>
                <input type="text" placeholder="Enter age in years"
                  value={userData.age}
                  onChange={(event)=>setUserData({...userData,"age":event.target.value})}/>
                <div className="btn-2">
                <button onClick={handleSubmitData}>Submit</button>
                </div>
                
            </form>
        </div>
        
    </div>
  )
}

export default Modal