import { createSlice } from "@reduxjs/toolkit"


export const Store = createSlice({
    name: "counter",
    initialState: [],
    reducers: {
        increment(state, actions) {
            state.push(actions.payload)
        },
        decrement(state, actions) {
            return state.filter((item) => item?.id !== actions.payload)
        },
        removeAll() {
            return []
        }
    }
})

export const { increment, decrement, removeAll } = Store.actions;
export default Store.reducer;