import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk('login/loginThunk', (args) => {
    return fetch(args.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ username: args.username, password: args.password })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err))
    // .then((result) => result)
})

export const RegisterUserAPI = createAsyncThunk('login/RegisterUserAPI', (args) => {
    return fetch(args.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ username: args.username, email: args.email, password: args.password })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err))
    // .then((result) => result)
})

const loginInitialState = {
    username: '',
    status: '', //
    isloggedIn: false,
}

export const mySlice = createSlice({
    name: 'login',
    initialState: loginInitialState,
    reducers: {
        doLogin: (state, action) => {
            if (action.payload.username != '' && action.payload.username != undefined && action.payload.username != null) {
                // console.log('from login', action.payload)
                state.username = action.payload.username;
                state.isloggedIn = true;
                localStorage.setItem('username', action.payload.username)
                localStorage.setItem('isloggedIn', true)
            }
            else {
                state.isloggedIn = false
            }
        },
        logout: (state) => {
            state.username = '';
            state.isloggedIn = false;
            localStorage.setItem('username', "")
            localStorage.setItem('isloggedIn', false)
        }
    },
    extraReducers: (builder) => {
        builder.addCase('loginThunk.pending', (state, action) => {
            console.log('pending status')
        });
        builder.addCase('loginThunk.fulfilled', (state, action) => {
            state = action.payload;
            console.log('fullfilled')
        });
        builder.addCase('loginThunk.rejected', (state, action) => {
            console.log('rejected')
        });

        builder.addCase('RegisterUserAPI.pending', (state, action) => {
            console.log('pending state for register user api')
        })

        builder.addCase('RegisterUserAPI.fulfilled', (state, action) => {
            console.log('fulfilled state for register user api')
        })
        builder.addCase('RegisterUserAPI.rejected', (state, action) => {
            console.log('rejected state for register user api')
        })
    },
    // [loginThunk.fulfilled]: (state, action) => {
    //     console.log('fulfilled')
    // },
    // [loginThunk.rejected]: (state, action) => {
    //     console.log('rejected')
    // },
})


export const { doLogin, logout } = mySlice.actions;
export default mySlice.reducer;