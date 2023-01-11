import React, { useEffect, useState } from 'react'
import './manageQuestion.scss'
import { useDispatch } from 'react-redux';
import { deleteQuestionThunk, getAllQuestionByCategThunk, getCategoriesThunk } from '../../util/questionSlice';

function ManageQuestions() {
    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currCateg, setCurrCateg] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        //fetching all the categories to render on screen
        dispatch(getCategoriesThunk()).unwrap()
            .then((res) => {
                //loading categories values
                setCategories(res);
            })
    }, []);

    //fetching all the questions after selecting category
    useEffect(() => {
        fetchAllQuestions();
    }, [currCateg])

    useEffect(()=>{
        setCurrCateg(categories[0])
    },[categories])


    function fetchAllQuestions(){ //for fetching all questions
        dispatch(getAllQuestionByCategThunk(currCateg)).unwrap()
        .then((question) => setQuestions(question))
    }

    function deleteQuestion(id){ //for deleting question based on object_id in database
        dispatch(deleteQuestionThunk(id)).unwrap()
        .then((result)=> fetchAllQuestions())
        .catch((err)=> console.log(err))
    }

    return (
        <div className='manageQuestions'>
            <div className="questionContainer">
                <label htmlFor='category'>Select category</label>
                <select name='category' value={currCateg} onChange={(e) => setCurrCateg(e.target.value)}>
                    {categories.map((categ) =>
                        <option key={categ} value={categ}>{categ}</option>
                    )}
                </select>

                {questions.map((quest, i) =>
                    <div key={i} className="question" style={{ display: 'flex' }}>
                        <p><span>{`Q${i+1}. `}</span> {quest.question}</p>
                        <i className="fa-solid fa-trash" onClick={()=>deleteQuestion(quest._id)}></i>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ManageQuestions