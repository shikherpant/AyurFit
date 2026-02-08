import { useContext, useEffect, useState } from 'react'
import { quiz } from '../data/quizData'
import QuizContext from '../Context/QuizContext'
// import { useNavigate } from 'react-router-dom'
const QuizModal = () => {

    const [quesNo,setQuesNo]=useState(0)
    const [countA,setCountA]=useState(0)
    const [countB,setCountB]=useState(0)
    const [countC,setCountC]=useState(0)
    const [result,setResult]=useState()


    // const navigate=useNavigate()

    const {quizStatus,setQuizStatus}=useContext(QuizContext)

    useEffect(()=>{
        console.log(quizStatus)
    },[quizStatus])

    const saveAnswer=(ans)=>{

        if(quesNo<15){
            if(ans=="A"){
                setCountA(countA+1)
            }
            else if(ans=="B"){
                setCountB(countB+1)
            }
            else{
                setCountC(countC+1)
            }
            setQuesNo(quesNo+1)
            
        }
        console.log(quesNo)
        // console.log(countA,countB,countC)
    }

    const printResult=()=>{
        let res;
        if(countA>countB && countA>countC){
            res="VATA"
        }
        else if(countB>countA && countB>countC){
            res="PITTA"
        }
        else if(countC>countA && countC>countB){
            res="KAPHA"
        }
        else if(countA==countB && countA>countC){
            res="VATA-PITTA"
        }
        else if(countA==countC && countA>countB){
            res="VATA-KAPHA"
        }
        else if(countB==countC && countB>countA){
            res="PITTA-KAPHA"
        }
        else{
            res="TRI-DOSHA / BALANCED"
        }
        console.log(res)
        setResult("Dominant Dosha : "+res)
    }

  return (
    <div className='quizModal'>
        <h1>QUIZ</h1>

        {
            quesNo<15?(
                <>
                    <h3>Ques {quesNo+1} : {quiz[quesNo]?.question}</h3>

                    <div className="options">
                        <div onClick={()=>saveAnswer("A")}>{quiz[quesNo]?.a}</div>
                        <div onClick={()=>saveAnswer("B")}>{quiz[quesNo]?.b}</div>
                        <div onClick={()=>saveAnswer("C")}>{quiz[quesNo]?.c}</div>
                    </div>
                </>
            ):
            (
                <>
                    <div hidden={quesNo<15} className="btn-container">
                        <button onClick={printResult}>Greate Job! Check Result</button>
                        <button onClick={()=>setQuizStatus("Ready")}>Make Sure ? Check Again</button>
                    </div>

                    <h1 className="finalResult">{result}</h1>
                </>
            )
        }
        
    </div>
  )
}

export default QuizModal