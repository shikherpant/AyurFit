import { useState } from 'react'
import QuizContext from './QuizContext'

// eslint-disable-next-line react/prop-types
const QuizProvider = ({children}) => {

    const [quizStatus,setQuizStatus]=useState("Ready")

  return (
    <QuizContext.Provider value={{quizStatus,setQuizStatus}}>
        {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider