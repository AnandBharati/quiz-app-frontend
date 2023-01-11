import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CustomInput from './CustomInput';
import CustomOptionInput from './CustomOptionInput';
import {setCategory, setQuestion, setOptions, setCorrectAnswer}  from '../../util/questionSlice'

export let SaveDataHandler;

function SingleQuestionEntry() {
    const dispatch = useDispatch();

    const [categ, setCateg] = useState('')
    const [quest, setQuest] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [option5, setOption5] = useState('')
    const [option6, setOption6] = useState('')

    const [cOption1, cSetOption1] = useState(false);
    const [cOption2, cSetOption2] = useState(false);
    const [cOption3, cSetOption3] = useState(false);
    const [cOption4, cSetOption4] = useState(false);
    const [cOption5, cSetOption5] = useState(false);
    const [cOption6, cSetOption6] = useState(false);   

    SaveDataHandler= ()=>{
        dispatch(setCategory({category: categ}));
        dispatch(setQuestion({question: quest}));
        dispatch(setOptions({option1, option2, option3, option4, option5, option6}));
        dispatch(setCorrectAnswer({
            correct_option1: cOption1,
            correct_option2: cOption2,
            correct_option3: cOption3,
            correct_option4: cOption4,
            correct_option5: cOption5,
            correct_option6: cOption6
        }));
    }

    return (
        <div className='singleQuestionEntry'>
            <CustomInput placeholder='category' list="categories" name="category" style={{ width: '10rem' }} hook={categ} setHook={(newValue) => setCateg(newValue)}>
                <datalist id='categories'>
                    <option value='value 1' />
                    <option value='value 2' />
                    <option value='value 3' />
                    <option value='value 4' />
                    <option value='value 5' />
                </datalist>
            </CustomInput>
            <CustomInput placeholder='question' name="question" style={{ width: '24rem' }} hook={quest} setHook={(newValue) => setQuest(newValue)} />

            <div className="correctAnswerContainer">
                <CustomOptionInput placeholder='option 1' name="option 1" style={{ width: '20rem' }} hook={option1} setHook={(newValue) => setOption1(newValue)} hook2={cOption1} setHook2={(newVal) => cSetOption1(newVal)} />
                <CustomOptionInput placeholder='option 2' name="option 2" style={{ width: '20rem' }} hook={option2} setHook={(newValue) => setOption2(newValue)} hook2={cOption2} setHook2={(newVal) => cSetOption2(newVal)} />
                <CustomOptionInput placeholder='option 3' name="option 3" style={{ width: '20rem' }} hook={option3} setHook={(newValue) => setOption3(newValue)} hook2={cOption3} setHook2={(newVal) => cSetOption3(newVal)} />
                <CustomOptionInput placeholder='option 4' name="option 4" style={{ width: '20rem' }} hook={option4} setHook={(newValue) => setOption4(newValue)} hook2={cOption4} setHook2={(newVal) => cSetOption4(newVal)} />
                <CustomOptionInput placeholder='option 5' name="option 5" style={{ width: '20rem' }} hook={option5} setHook={(newValue) => setOption5(newValue)} hook2={cOption5} setHook2={(newVal) => cSetOption5(newVal)} />
                <CustomOptionInput placeholder='option 6' name="option 6" style={{ width: '20rem' }} hook={option6} setHook={(newValue) => setOption6(newValue)} hook2={cOption6} setHook2={(newVal) => cSetOption6(newVal)} />
            </div>

        </div>
    )
}

export default SingleQuestionEntry