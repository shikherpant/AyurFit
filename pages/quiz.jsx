import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import QuizContext from "../Context/QuizContext"

const Quiz = () => {

    const {quizStatus,setQuizStatus}=useContext(QuizContext)
    const navigate=useNavigate()
    
    useEffect(()=>{
        console.log(quizStatus)
        if(quizStatus=="Ready"){
            navigate("/quiz")
        }
        else if(quizStatus=="Steady"){
            navigate("/quiz/instructions")
        }
        else{
            navigate("/quiz/quizModal")
        }
    },[quizStatus,navigate])

    const handleQuizStatus=()=>{
        if(quizStatus=="Ready"){
            setQuizStatus("Steady")
        }
        if(quizStatus=="Steady"){
            setQuizStatus("Go")
        }
    }
  return (
    <div className="pageQuiz">
        <div className="part1" hidden={quizStatus=="Go"}>
            <h1>Exited to know yourself ?</h1>
            <button onClick={handleQuizStatus}>{quizStatus}<i className="ri-arrow-right-line"></i></button>
        </div>      
        <div className="part2">
            <Outlet setQuizStatus={setQuizStatus}/>
        </div>  
    </div>
  )
}

export default Quiz