import { createSlice } from "@reduxjs/toolkit";

const CommonInputValue = createSlice({
    name: 'CommonInput',
    initialState: {
        value: "default",
        childAInputValue: "child A",
        childBInputValue: "child B"
    },

    reducers: {
        CommonInputReducer(state, action) {
            console.log(state, action);
            state.value = action.payload
        },

        CommonInputReducerChildA(state, action) {
            console.log(state, action);
            state.childAInputValue = action.payload
        },

        CommonInputReducerChildB(state, action) {
            console.log(state, action);
            state.childBInputValue = action.payload
        }

    },

})
console.log(CommonInputValue);
export const { CommonInputReducer,CommonInputReducerChildB,CommonInputReducerChildA } = CommonInputValue.actions


export default CommonInputValue.reducer
