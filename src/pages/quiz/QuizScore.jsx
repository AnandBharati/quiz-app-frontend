import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './quiz.scss'

function QuizScore() {
  const qBank = useSelector((state) => state.qBankReducer)
  const [score, setScore] = useState(0);

  useEffect(() => {
    const questions = qBank.DATA;
    let correctAnswerCount = 0;
    questions.forEach((ques) => {
      JSON.stringify(ques.userResponse) === JSON.stringify(ques.answers) && ++correctAnswerCount;
    })

    setScore(correctAnswerCount);

  }, [])


  return (
    <div className="quiz-score">
      {score >= 10 ?
        <h1 className='passed'>Congratulation..!! you passed the exam with {score} marks</h1> :
        <h1 className='failed'>Opps..!! you failed the exam with {score} marks</h1>
      }
    </div>
  )
}

export default QuizScore