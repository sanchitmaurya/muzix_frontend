import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://127.0.0.1:5000";


const Auth = createSlice({
    name:"AUTH",
    initialState:{
        data:[]
    },

    reducers:{
        login:(state, action) => {
            state.data.push(action.payload);
        },

        register:(state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const loginAsync = (data) => async() => {
    const user = await axios(API_URL+"/auth/login",{
        method:"POST",
        data:{
            email:data.email,
            password:data.password,
        }
    });
    return user.data
}

export const registerAsync = (data) => async() => {
    const user = await axios(API_URL+"/auth/register",{
        method:"POST",
        data:{
            email:data.email,
            password:data.password,
            mobile:data.mobile,
            name:data.name
        }
    });
    return user.data
}



export const {login} = Auth.actions;
export default Auth.reducer
