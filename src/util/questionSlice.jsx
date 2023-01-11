import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addQuestionThunk = createAsyncThunk('Question/addQuestionThunk', (args) => {
    if (args.category !== "" && args.question !== '' && args.option1 !== '' && args.option2 !== '' && args.option3 !== "" && args.option4 !== '') {

        return fetch('https://enthusiastic-tan-jay.cyclic.app/questions/new', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(args)
        }).then((res) => res.json())
            .catch((err) => console.log(err))

    }
    else {
        return {err: "mandatory field not entered"}
    }
})

export const getCategoriesThunk = createAsyncThunk('Question/addQuestionThunk', (args) => {
    return fetch('https://enthusiastic-tan-jay.cyclic.app/questions/allcategories')
        .then((res) => res.json())
        .catch((err) => console.log(err))
})

export const getAllQuestionByCategThunk = createAsyncThunk('Question/addQuestionThunk', (args) => {
    return fetch('https://enthusiastic-tan-jay.cyclic.app/questions/bycategory/' + args)
        .then((res) => res.json())
        .catch((err) => console.log(err))
})

export const deleteQuestionThunk = createAsyncThunk('Question/addQuestionThunk', (args) => {
    return fetch('https://enthusiastic-tan-jay.cyclic.app/questions/delete' + args,{
        method: 'DELETE',
        headers: {
            'Content-type': 'applicaion/json'
        },
    })
        .then((res) => res.json())
        .catch((err) => console.log(err))
})

const questionInitialState = {
    category: '',
    question: '',
    description: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
    option6: '',
    multiple_correct_answers: false,
    correct_option1: false,
    correct_option2: false,
    correct_option3: false,
    correct_option4: false,
    correct_option5: false,
    correct_option6: false,
}

export const QuestionSlice = createSlice({
    name: 'Question',
    initialState: questionInitialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload.category;
        },
        setQuestion: (state, action) => {
            state.question = action.payload.question;
        },
        setOptions: (state, action) => {
            state.option1 = action.payload.option1;
            state.option2 = action.payload.option2;
            state.option3 = action.payload.option3;
            state.option4 = action.payload.option4;
            state.option5 = action.payload.option5;
            state.option6 = action.payload.option6;
        },
        setCorrectAnswer: (state, action) => {
            state.correct_option1 = action.payload.correct_option1,
                state.correct_option2 = action.payload.correct_option2,
                state.correct_option3 = action.payload.correct_option3,
                state.correct_option4 = action.payload.correct_option4,
                state.correct_option5 = action.payload.correct_option5,
                state.correct_option6 = action.payload.correct_option6
        }
    },
})


export const { setCategory, setQuestion, setOptions, setCorrectAnswer } = QuestionSlice.actions;
export default QuestionSlice.reducer;