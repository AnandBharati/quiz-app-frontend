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
    isLoading: false,
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
        builder.addCase(loginThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state = action.payload;
            console.log('login fulfiled')
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(RegisterUserAPI.pending, (state, action) => {
            isLoading = true;
        })

        builder.addCase(RegisterUserAPI.fulfilled, (state, action) => {
            isLoading = false;
        })
        builder.addCase(RegisterUserAPI.rejected, (state, action) => {
            isLoading = false;
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