import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Store"

export default configureStore({
    reducer: {
        counter: counterSlice
    }
})