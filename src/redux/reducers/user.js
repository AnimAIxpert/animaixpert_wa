/**
 * User Reducers
 */

// Redux Toolkit
import {
    createSlice,
} from '@reduxjs/toolkit';

const userInitialState = {
    email: '',
    username: '',
    birthdate: '',
    token: '',
}

const userSlice = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers: {
        signIn: (state, action) => {
            return {
                ...state,
                token: action.payload.token,
            };
        },
        signUp: (state, action) => {
            return {
                ...state,
                email: action.payload.email,
                username: action.payload.username,
                birthdate: action.payload.birthdate,
                token: 'created'
            }
        },
        update: (state, action) => {
            return {
                ...state,
                email: action.payload.email,
                username: action.payload.username,
                birthdate: action.payload.birthdate,
            }
        },
        whoAmI: (state, action) => {
            return {
                ...state,
                email: action.payload.email,
                username: action.payload.username,
                birthdate: action.payload.birthdate,
                
            };
        },
        logOut: (state, action) => {
            return {
                ...state,
                id: '',
                email: '',
                firstname: '',
                lastname: '',
                token: '',
            };
        }
    },
});

export const {
    signIn,
    signUp,
    whoAmI,
    logOut,
    update,
} = userSlice.actions;

export const userReducer = userSlice.reducer;