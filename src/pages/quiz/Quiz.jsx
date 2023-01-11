import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SingleQuestion from './SingleQuestion';


function Quiz() {
  const [ques_num, setQues_num] = useState(1);
  const questions = useSelector((state) => state.qBankReducer.DATA);
  const navigate = useNavigate()

  function prevQuest() {
    ques_num > 1 && setQues_num(ques_num - 1);
  }

  function nextQuest() {
    ques_num < questions.length && setQues_num(ques_num + 1);

    if (ques_num === questions.length) {
      //submit the quiz and display result
    }
  }

  function SubmitQuiz(){
    navigate('/quiz/score');
  }

  return (
    <div className='quiz'>

      <SingleQuestion ques_num={ques_num} data={questions[ques_num - 1]} />

      <div className="buttons">
        <button type='button' onClick={() => prevQuest()}>Prev</button>
        {ques_num !== questions.length ?
          <button type='button' onClick={() => nextQuest()}> Next </button> :
          <button type='button' onClick={() => SubmitQuiz()}> Submit </button>
        }
      </div>
    </div>
  )
}

export default Quiz