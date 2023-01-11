import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk('qBankSlice/fetchQuestions', async ()=>{
    const response = await fetch('https://enthusiastic-tan-jay.cyclic.app/questions/all')
    return response.json()
})

const QbankState = [
    {
        questionId: '',
        question: '',
        isMultiSelect: true,
        options: ['', '', '', '', '', '',],
        answers: [false, false, true, true, false, false],
        userResponse: [false, true, false, true, false, false]
    }
];


export const qBankSlice = createSlice({
    name: 'qBankSlice',
    initialState: {DATA : QbankState, isDataLoaded: false, isLoading:  false},
    reducers: {
        getQBankFromDb: (state,action) => {
                    const newArr = []
                    action.payload.result.map((r, i) => {
                        const newQues = {
                            questionId: r._id,
                            category: r.category,
                            question: r.question,
                            description: r.description,
                            options: [r.option1, r.option2, r.option3, r.option4, r.option5, r.option6],
                            //if question is of mulplte MCQ
                            isMultiSelect: r.multiple_correct_answers,
                            //default user responses
                            userResponse: new Array(6).fill(false),
                            //correct answers
                            answers: [r.correct_option1, r.correct_option2, r.correct_option3, r.correct_option4, r.correct_option5, r.correct_option6]
                        };
                        newArr.push(newQues); //setting up new array
                    })
                    state.DATA = newArr;
                    console.log(newArr)
        },
        setResponse: (state, action) => { //payload: ques_index or id
            state.DATA[action.payload.index].userResponse = action.payload.userResponse;
        },
        flushQBank: (state, action) => {
            state.DATA = QbankState;
            state.isDataLoaded = false;
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchQuestions.pending , (state, action)=>{
            state.isDataLoaded = false;
            state.isLoading = true;
        });
        builder.addCase(fetchQuestions.fulfilled, (state, action)=>{
            state.isDataLoaded = true;  
            state.isLoading = false;         
        });
        builder.addCase(fetchQuestions.rejected, (state, action)=>{
            state.isDataLoaded = false;   
            state.isLoading = false;         
        });
    }
})

export default qBankSlice.reducer;
export const { getQBankFromDb, setResponse, flushQBank } = qBankSlice.actions;