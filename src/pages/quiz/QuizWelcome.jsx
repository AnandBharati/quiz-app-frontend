
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchQuestions, getQBankFromDb } from '../../util/quesBankSlice';
import './quiz.scss'


function QuizWelcome() {
    const dispatch = useDispatch()

    async function getDataFromDB() {
        console.log('onload')
        const result = await dispatch(fetchQuestions()).unwrap()
        dispatch(getQBankFromDb({result: result}));
    }

    return (
        <div className='QuizWelcome' >
            <center style={{ padding: '30px 0' }}>
                <h2>Exam Terms and Conditions (the “Terms”) </h2>
                <p style={{ fontSize: '1.2rem', padding: '10px 40px', textAlign: 'justify' }}> Eligibility. DevOps Institute Certification exams: You must have met any required learning or certification prerequisites prior to taking the exam.
                    Confidential Information. The content of the Exam, including without limitation, questions, answers, or any communication, including oral communication, regarding or related to the Exam is DevOps Institute’s confidential information (“Confidential Information”). Any disclosure of Confidential Information is a violation of these Terms and could compromise the integrity and security of this certification program. DevOps Institute makes exams available to You solely for the purpose of demonstrating competency in the content area assessed by the Exam. You are expressly prohibited from disclosing, publishing, reproducing, copying, selling, posting, downloading or transmitting any Confidential Information, in whole or in part, in any form or by any means, oral or written, electronic or mechanical, for any purpose.
                    Certification Revocation. If you violate these Terms or engage in any misconduct, you may be prohibited from taking the Exam and/or any other DevOps Institute Exam; you may be decertified from the DevOps Institute Certification Program; and DevOps Institute, in its sole discretion, may terminate any applicable business relationship with you.
                    Examples of misconduct and/or misuse of the Exam include but are not limited to:
                    Providing false or fraudulent identification
                    Providing or accepting improper assistance
                    Disseminating actual Exam content by any means including, but not limited to, web postings, formal or informal test preparation or discussion groups, reconstruction through memorization or any other method
                    Having non-authorized items in your possession during the Exam
                    Using unauthorized materials (including brain-dump material and/or unauthorized publication of Exam questions with or without answers) to prepare for the Exam
                    Making notes of any kind during the Exam
                    Removing or attempting to remove Exam material (in any format)
                    Intentionally causing a disturbance of any kind during the Exam
                    Modifying and/or altering the results and/or score report for this Exam or any other Exam record
                    Circumventing the Exam retake policy
                    Misrepresentation of certification status
                    Misconduct as determined by statistical analysis
                    Unauthorized accessing of Exam or Exam content (including access of materials in forums, chat rooms, discussion groups, blogs or other sharing sites with intent to circumvent Exam procedures)
                </p>
                <br />
                <Link to='/quiz/start'>
                    <span onClick={getDataFromDB}>Start</span>
                </Link>
            </center>
        </div>
    )
}

export default QuizWelcome