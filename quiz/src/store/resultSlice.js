import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "default",
    points: 0,
    questions: 0,
    time: "none",
};

export const resultSlice = createSlice({
    name: 'results',
    initialState,
    reducers:{
        incrementPoint: (state) => {
            state.points += 1;
        },
        numOfQuestions: (state,action) => {
            state.questions = action.payload;
        },
        setName: (state,action) => {
            state.name = action.payload;
        },
        setTime: (state,action) => {
            state.time = action.payload;
        },
        setPoints: (state,action) => {
            state.points = action.payload;
        },
    },
});

export const {incrementPoint,numOfQuestions,setName,setTime,setPoints} = resultSlice.actions;

export const selectName = (state) => state.results.name;
export const selectPoints = (state) => state.results.points;
export const selectQuestions = (state) => state.results.questions;
export const selectTime = (state) => state.results.time;

export default resultSlice.reducer;