import {configureStore} from "@reduxjs/toolkit";
import Auth from "../reducers";

const configStore = configureStore({
    reducer:
    Auth,
    
})

export default configStore;