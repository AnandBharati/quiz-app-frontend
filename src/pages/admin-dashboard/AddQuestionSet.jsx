import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuestionThunk } from '../../util/questionSlice'
import './addQuestionSet.scss'
import SingleQuestionEntry from './SingleQuestionEntry'
import { SaveDataHandler } from './SingleQuestionEntry'


function AddQuestionSet() {
    const qData = useSelector((state)=> state.questionReducer)
    const dispatch = useDispatch();
    async function clickHandler(){
        SaveDataHandler();
        try {
            const result = await dispatch(addQuestionThunk(qData)).unwrap();
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='AddQuestionSet'>
            <SingleQuestionEntry />
            <button type='button' onClick={() => clickHandler()}>Save</button>
        </div>
    )
}

export default AddQuestionSet